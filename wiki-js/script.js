console.log("✅ script.js loaded");

document.addEventListener("DOMContentLoaded", () => {
  const themeBtn  = document.getElementById("themeBtn");
  const textBtn   = document.getElementById("textBtn");
  const accentBtn = document.getElementById("accentBtn");
  const content   = document.getElementById("content");
  const header    = document.querySelector(".hero");

  // 3 required event listeners
  if (themeBtn) themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    // small visible feedback
    themeBtn.textContent = document.body.classList.contains("dark") ? "Light Mode" : "Toggle Dark Mode";
  });

  if (textBtn) textBtn.addEventListener("click", () => {
    content.classList.toggle("big-text");
  });

  if (accentBtn) accentBtn.addEventListener("click", () => {
    header.classList.toggle("header-accent");
  });

  // Bonus: gallery hover shows innerHTML + class + inline style changes
  document.querySelectorAll(".gallery figure").forEach((fig) => {
    const img = fig.querySelector("img");
    const cap = fig.querySelector("figcaption");
    if (!img || !cap) return;

    const original = cap.innerHTML;

    img.addEventListener("mouseenter", () => {
      cap.innerHTML = "Highlighted by JavaScript ✨";   // innerHTML change
      cap.classList.add("highlight");                   // add CSS class
      img.style.borderColor = "#0ea5e9";                // inline style changes
      img.style.transform = "scale(1.02)";
    });

    img.addEventListener("mouseleave", () => {
      cap.innerHTML = original;
      cap.classList.remove("highlight");
      img.style.borderColor = "#ddd";
      img.style.transform = "none";
    });
  });
});
