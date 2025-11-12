console.log("✅ wiki.js loaded from wki-js/");

document.addEventListener("DOMContentLoaded", () => {
  const themeBtn  = document.getElementById("themeBtn");
  const textBtn   = document.getElementById("textBtn");
  const accentBtn = document.getElementById("accentBtn");
  const content   = document.getElementById("content");
  const header    = document.querySelector(".hero");

  themeBtn.addEventListener("click", () => document.body.classList.toggle("dark"));
  textBtn.addEventListener("click",  () => content.classList.toggle("big-text"));
  accentBtn.addEventListener("click",() => header.classList.toggle("header-accent"));

  document.querySelectorAll(".gallery figure").forEach((fig) => {
    const img = fig.querySelector("img");
    const cap = fig.querySelector("figcaption");
    const original = cap ? cap.innerHTML : "";

    img.addEventListener("mouseenter", () => {
      if (!cap) return;
      cap.innerHTML = "Highlighted by JavaScript ✨";
      cap.classList.add("highlight");
      img.style.borderColor = "#0ea5e9";
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

