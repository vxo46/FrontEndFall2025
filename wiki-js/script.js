document.addEventListener("DOMContentLoaded", () => {
  // JUMP buttons (navigate)
  const jumpBigfoot = document.getElementById("jumpBigfoot");
  const jumpMan     = document.getElementById("jumpMan");
  const jumpWoman   = document.getElementById("jumpWoman");

  if (jumpBigfoot) jumpBigfoot.addEventListener("click", () => document.getElementById("bigfoot")?.scrollIntoView({behavior:"smooth"}));
  if (jumpMan)     jumpMan.addEventListener("click",     () => document.getElementById("man")?.scrollIntoView({behavior:"smooth"}));
  if (jumpWoman)   jumpWoman.addEventListener("click",   () => document.getElementById("woman")?.scrollIntoView({behavior:"smooth"}));

  // RUBRIC toggles (visual)
  const themeBtn  = document.getElementById("themeBtn");
  const textBtn   = document.getElementById("textBtn");
  const accentBtn = document.getElementById("accentBtn");
  const content   = document.getElementById("content");
  const header    = document.querySelector(".hero");

  themeBtn?.addEventListener("click", () => document.body.classList.toggle("dark"));
  textBtn?.addEventListener("click",  () => content?.classList.toggle("big-text"));
  accentBtn?.addEventListener("click",() => header?.classList.toggle("header-accent"));

  // Hover effects on gallery (innerHTML + inline styles)
  document.querySelectorAll(".gallery figure").forEach((fig) => {
    const img = fig.querySelector("img");
    const cap = fig.querySelector("figcaption");
    const original = cap ? cap.innerHTML : "";
    if (!img || !cap) return;

    img.addEventListener("mouseenter", () => {
      cap.innerHTML = "Highlighted by JavaScript ✨";
      cap.classList.add("highlight");
      img.style.borderColor = "#0ea5e9";
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
