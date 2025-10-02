document.addEventListener("DOMContentLoaded", () => {
  const themeBtn  = document.getElementById("themeBtn");
  const textBtn   = document.getElementById("textBtn");
  const accentBtn = document.getElementById("accentBtn");
  const content   = document.getElementById("content");
  const header    = document.querySelector(".hero"); // your header banner

  /* Listener #1: Toggle dark mode (adds/removes CSS class) */
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  /* Listener #2: Toggle bigger text in main area (adds/removes CSS class) */
  textBtn.addEventListener("click", () => {
    content.classList.toggle("big-text");
  });

  /* Listener #3: Accent the header (adds/removes CSS class) */
  accentBtn.addEventListener("click", () => {
    header.classList.toggle("header-accent");
  });

  /* Bonus interactions for rubric: change innerHTML and inline styles */
  const figures = document.querySelectorAll(".gallery figure");
  figures.forEach((fig) => {
    const img = fig.querySelector("img");
    const cap = fig.querySelector("figcaption");
    const original = cap ? cap.innerHTML : "";

    img.addEventListener("mouseenter", () => {
      if (!cap) return;
      // innerHTML change
      cap.innerHTML = "Highlighted by JavaScript ✨";
      cap.classList.add("highlight");
      // inline style change (border + scale)
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

