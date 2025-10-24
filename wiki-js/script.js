// Quick proof JS is loaded (check console)
console.log("✅ wiki.js loaded");

document.addEventListener("DOMContentLoaded", () => {
  const themeBtn  = document.getElementById("themeBtn");
  const textBtn   = document.getElementById("textBtn");
  const accentBtn = document.getElementById("accentBtn");
  const content   = document.getElementById("content");
  const header    = document.querySelector(".hero");

  // Listener #1: toggle dark mode
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  // Listener #2: toggle bigger text in main area
  textBtn.addEventListener("click", () => {
    content.classList.toggle("big-text");
  });

  // Listener #3: accent the header
  accentBtn.addEventListener("click", () => {
    header.classList.toggle("header-accent");
  });

  // BONUS for rubric: innerHTML + inline style on gallery hover
  document.querySelectorAll(".gallery figure").forEach((fig) => {
    const img = fig.querySelector("img");
    const cap = fig.querySelector("figcaption");
    const original = cap ? cap.innerHTML : "";

    img.addEventListener("mouseenter", () => {
      if (!cap) return;
      cap.innerHTML = "Highlighted by JavaScript ✨"; // innerHTML change
      cap.classList.add("highlight");                 // add class
      img.style.borderColor = "#0ea5e9";              // inline style changes
      img.style.transform = "scale(1.02)";
    });

    img.addEventListener("mouseleave", () => {
      if (!cap) return;
      cap.innerHTML = original;
      cap.classList.remove("highlight");
      img.style.borderColor = "#ddd";
      img.style.transform = "none";
    });
  });
});
