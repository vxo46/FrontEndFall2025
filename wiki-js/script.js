document.addEventListener("DOMContentLoaded", () => {

  const themeBtn  = document.getElementById("themeBtn");
  const textBtn   = document.getElementById("textBtn");
  const accentBtn = document.getElementById("accentBtn");
  const content   = document.getElementById("content");
  const header    = document.querySelector(".hero");

  // THEME TOGGLE
  themeBtn.onclick = () => {
    document.body.classList.toggle("dark");
    themeBtn.textContent = document.body.classList.contains("dark")
      ? "Light Mode"
      : "Toggle Dark Mode";
  };

  // BIG TEXT
  textBtn.onclick = () => content.classList.toggle("big-text");

  // HEADER ACCENT
  accentBtn.onclick = () => header.classList.toggle("header-accent");

  // HOVER EFFECT (NO innerHTML change)
  document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("mouseenter", () => {
      img.style.borderColor = "#0ea5e9";
      img.style.transform = "scale(1.02)";
    });
    img.addEventListener("mouseleave", () => {
      img.style.borderColor = "#ddd";
      img.style.transform = "none";
    });
  });

  // LIGHTBOX
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.classList.remove("hidden");
    });
  });

  // CLOSE LIGHTBOX
  lightbox.addEventListener("click", () => {
    lightbox.classList.add("hidden");
  });

});
