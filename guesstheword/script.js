"use strict";

/* =========================
   CONFIG: words / questions
   ========================= */
const WORDS = [
  { word: "ibis",     question: "UM’s bird mascot is which wading bird?", hint: "Mascot bird" },
  { word: "manatee",  question: "What marine mammal is nicknamed the ‘sea cow’?", hint: "Sea cow" },
  { word: "panther",  question: "What big cat represents Florida’s NHL team?", hint: "Florida big cat" },
  { word: "mangrove", question: "What coastal tree stabilizes shorelines with tangled roots?", hint: "Coastal tree" },
  { word: "orchid",   question: "Which flower has many native Everglades species?", hint: "Everglades flower" },
  { word: "egret",    question: "Which tall white wading bird often hunts in shallow water?", hint: "White heron cousin" },
  { word: "tarpón",   question: "Which silver game fish is famous in Florida waters?", hint: "Big silver fish (no accent OK: tarpon)" },
  { word: "sabal",    question: "What palm is Florida’s state tree?", hint: "State tree (____ palm)" }
];
// allow plain 'tarpon' input even if listed with accent
const NORMALIZE = (s) => s.normalize("NFD").replace(/\p{Diacritic}/gu, "");

/* UI TUNING */
const MAX_LIVES = 6;
const NEXT_ROUND_DELAY_MS = 1500; // auto-start next round after win/lose

/* =========================
   DOM
   ========================= */
const textInput = document.getElementById("myText");
const submitBtn = document.getElementById("myButton");
const resetBtn  = document.getElementById("resetBtn");
const hintBtn   = document.getElementById("hintBtn");

const slotsBox  = document.getElementById("slots");
const incorrect = document.getElementById("incorrect");
const livesEl   = document.getElementById("lives");
const triesLeft = document.getElementById("triesLeft");

const note      = document.getElementById("note");
const hintEl    = document.getElementById("hint");
const questionEl= document.getElementById("question");

/* =========================
   STATE
   ========================= */
let target = "";     // full word (may include accents)
let norm   = "";     // normalized version (no accents) for matching
let hint   = "";
let letters = [];
let correctSet = new Set();
let wrongSet   = new Set();
let lives = MAX_LIVES;
let tries = MAX_LIVES;
let hintUsed = false;

/* =========================
   INIT
   ========================= */
startRound();

/* =========================
   EVENTS
   ========================= */
submitBtn.addEventListener("click", handleGuess);
resetBtn.addEventListener("click", startRound);
hintBtn.addEventListener("click", useHint);

textInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") { e.preventDefault(); handleGuess(); }
});

/* =========================
   FUNCTIONS
   ========================= */
function startRound(){
  const choice = WORDS[Math.floor(Math.random()*WORDS.length)];
  target  = choice.word.toLowerCase();
  norm    = NORMALIZE(target);
  hint    = choice.hint;
  letters = [...norm]; // tiles based on normalized word

  correctSet.clear();
  wrongSet.clear();
  hintUsed = false;

  lives = MAX_LIVES;
  tries = MAX_LIVES;
  livesEl.textContent = lives;
  triesLeft.textContent = tries;
  incorrect.textContent = "";
  setNote("New round!", true);
  hintEl.textContent = "Theme: Florida nature";
  questionEl.textContent = "Question: " + choice.question;

  textInput.disabled = false;
  submitBtn.disabled = false;
  hintBtn.disabled = false;

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
    tries--;
    livesEl.textContent = lives;
    triesLeft.textContent = tries;
    incorrect.textContent = [...wrongSet].join(", ");
    // feedback
    slotsBox.classList.add("shake");
    setTimeout(() => slotsBox.classList.remove("shake"), 300);
    setNote(`Nope — “${raw}” is not in the word.`, false);

    if (tries <= 0) {
      revealAll(); // reveal accented original where applicable
      setNote(`Out of tries! The word was ${target.toUpperCase()} ❌`);
      endRound();
      return;
    }
  }

  render();

  // Win check: all normalized letters found
  if (letters.every(ch => correctSet.has(ch))) {
    revealAll();
    setNote(`You got it: ${target.toUpperCase()} ✅`, true);
    endRound();
  }
}

function render(){
  const tiles = [...slotsBox.children];
  tiles.forEach((tile, i) => {
    const ch = letters[i];
    tile.textContent = correctSet.has(ch) ? displayCharAt(i) : "—";
    tile.classList.toggle("reveal", correctSet.has(ch));
  });
}

// Map normalized char back to original (to show accents when revealed)
function displayCharAt(i){
  // Find the i-th normalized character’s original counterpart
  const originalChars = [...target.normalize("NFC")];
  const normalizedChars = [...norm];
  // If lengths match (no combining issues), return original
  if (originalChars.length === normalizedChars.length) {
    return originalChars[i];
  }
  // fallback if mismatch
  return letters[i];
}

function revealAll(){
  for (let i = 0; i < letters.length; i++){
    const tile = slotsBox.children[i];
    tile.textContent = displayCharAt(i);
    tile.classList.add("reveal");
  }
}

function endRound(){
  textInput.disabled = true;
  submitBtn.disabled = true;
  hintBtn.disabled = true;
  setTimeout(() => startRound(), NEXT_ROUND_DELAY_MS);
}

function useHint(){
  if (hintUsed || submitBtn.disabled) return;
  hintUsed = true;
  setNote("Hint: " + hint);
  tries = Math.max(0, tries - 1);
  lives = Math.max(0, lives - 1);
  triesLeft.textContent = tries;
  livesEl.textContent = lives;
  hintBtn.disabled = true;

  if (tries === 0) {
    revealAll();
    setNote(`Out of tries! The word was ${target.toUpperCase()} ❌`);
    endRound();
  }
}

function setNote(msg, good){
  note.textContent = msg;
  note.className = "note" + (good ? " good" : msg && good === false ? " bad" : "");
  clearTimeout(setNote._t);
  setNote._t = setTimeout(() => {
    note.textContent = "";
    note.className = "note";
  }, 1400);
}
