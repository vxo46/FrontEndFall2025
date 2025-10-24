// Prove the JS loaded (check the browser console)
console.log("✅ wiki.js loaded");

document.addEventListener("DOMContentLoaded", () => {
  const themeBtn  = document.getElementById("themeBtn");
  const textBtn   = document.getElementById("textBtn");
  const accentBtn = document.getElementById("accentBtn");
  const content   = document.getElementById("content");
  const header    = document.querySelector(".hero");

  // Listener #1: dark mode
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  // Listener #2: bigger text
  textBtn.addEventListener("click", () => {
    content.classList.toggle("big-text");
  });

  // Listener #3: accent header
  accentBtn.addEventListener("click", () => {
    header.classList.toggle("header-accent");
  });

  // Bonus rubric: innerHTML + inline style on gallery hover
  document.querySelectorAll(".gallery figure").forEach((fig) => {
    const img = fig.querySelector("img");
    const cap = fig.querySelector("figcaption");
    const original = cap ? cap.innerHTML : "";

    img.addEventListener("mouseenter", () => {
      if (!cap) return;
      cap.innerHTML = "Highlighted by JavaScript ✨"; // innerHTML change
      cap.classList.add("highlight");                 // add CSS class
      img.style.borderColor = "#0ea5e9";              // inline style change
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
