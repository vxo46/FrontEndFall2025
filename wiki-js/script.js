// Check that JS is loaded
console.log("✅ wiki.js loaded");

document.addEventListener("DOMContentLoaded", () => {
  const themeBtn  = document.getElementById("themeBtn");
  const textBtn   = document.getElementById("textBtn");
  const accentBtn = document.getElementById("accentBtn");
  const content   = document.getElementById("content");
  const header    = document.querySelector(".hero");

  // 🌙 Toggle dark mode
  themeBtn?.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  // 🔎 Toggle bigger text
  textBtn?.addEventListener("click", () => {
    content?.classList.toggle("big-text");
  });

  // 🎨 Toggle accent header underline
  accentBtn?.addEventListener("click", () => {
    header?.classList.toggle("header-accent");
  });
});
