"use strict";

// ===== Config you can change =====
const WORDS = [
  { word: "ibis", hint: "Mascot bird" },
  { word: "manatee", hint: "Sea cow" },
  { word: "panther", hint: "Florida big cat" },
  { word: "mangrove", hint: "Coastal tree" },
  { word: "orchid", hint: "Everglades flower" }
];
const MAX_LIVES = 6;
const NEXT_ROUND_DELAY_MS = 1500; // <— uses setTimeout after win/lose
// =================================

// DOM
const textInput = document.getElementById("myText");
const submitBtn = document.getElementById("myButton");
const resetBtn  = document.getElementById("resetBtn");
const slotsBox  = document.getElementById("slots");
const incorrect = document.getElementById("incorrect");
const livesEl   = document.getElementById("lives");
const note      = document.getElementById("note");
const hintEl    = document.getElementById("hint");

// State
let target = "";
let hint = "";
let letters = [];
let correctSet = new Set();
let wrongSet = new Set();
let lives = MAX_LIVES;

// Init
startRound();

// Events
submitBtn.addEventListener("click", handleGuess);
resetBtn.addEventListener("click", startRound);
textInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") { e.preventDefault(); handleGuess(); }
});

function startRound(){
  // pick a new word
  const choice = WORDS[Math.floor(Math.random()*WORDS.length)];
  target = choice.word.toLowerCase();
  hint = choice.hint;
  letters = [...target];

  // reset state
  correctSet.clear();
  wrongSet.clear();
  lives = MAX_LIVES;
  livesEl.textContent = lives;
  incorrect.textContent = "";
  setNote(`New round!`, true);
  hintEl.textContent = `Hint: ${hint}`;
  textInput.disabled = false;
  submitBtn.disabled = false;

  // build slots dynamically
  slotsBox.innerHTML = "";
  letters.forEach(() => {
    const span = document.createElement("span");
    span.className = "tile";
    span.textContent = "—";
    slotsBox.appendChild(span);
  });

  textInput.value = "";
  textInput.focus();
  render();
}

function handleGuess(){
  const raw = (textInput.value || "").trim().toLowerCase();
  textInput.value = "";
  textInput.focus();

  if (!/^[a-z]$/.test(raw)) {
    setNote("Enter a single letter (A–Z).");
    return;
  }
  if (correctSet.has(raw) || wrongSet.has(raw)) {
    setNote(`You already tried “${raw}”.`);
    return;
  }

  if (letters.includes(raw)) {
    correctSet.add(raw);
    setNote(`Nice! “${raw}” is in the word.`, true);
  } else {
    wrongSet.add(raw);
    lives--;
    livesEl.textContent = lives;
    incorrect.textContent = [...wrongSet].join(", ");
    // little shake when wrong
    slotsBox.classList.add("shake");
    setTimeout(() => slotsBox.classList.remove("shake"), 300);
    setNote(`Nope — “${raw}” is not in the word.`, false);
  }

  render();

  // Win/Lose checks
  if (letters.every(ch => correctSet.has(ch))) {
    revealAll();
    setNote(`You got it: ${target.toUpperCase()} ✅`, true);
    endRound();
  } else if (lives <= 0) {
    revealAll();
    setNote(`Out of lives! The word was ${target.toUpperCase()} ❌`);
    endRound();
  }
}

function render(){
  const tiles = [...slotsBox.children];
  tiles.forEach((tile, i) => {
    const ch = letters[i];
    tile.textContent = correctSet.has(ch) ? ch : "—";
    tile.classList.toggle("reveal", correctSet.has(ch));
  });
}

function revealAll(){
  // show the whole word
  for (let i = 0; i < letters.length; i++){
    const tile = slotsBox.children[i];
    tile.textContent = letters[i];
    tile.classList.add("reveal");
  }
}

function endRound(){
  // disable input, then auto-start a new round after a pause
  textInput.disabled = true;
  submitBtn.disabled = true;
  setTimeout(() => startRound(), NEXT_ROUND_DELAY_MS);  // <— setTimeout to change the word
}

function setNote(msg, good){
  note.textContent = msg;
  note.className = "note" + (good ? " good" : msg && good === false ? " bad" : "");
  // auto-clear after a moment
  clearTimeout(setNote._t);
  setNote._t = setTimeout(() => {
    note.textContent = "";
    note.className = "note";
  }, 1400); // <— setTimeout for fading/clearing feedback
}
