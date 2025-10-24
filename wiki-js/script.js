console.log("✅ wiki.js loaded");

document.addEventListener("DOMContentLoaded", () => {
  const themeBtn  = document.getElementById("themeBtn");
  const textBtn   = document.getElementById("textBtn");
  const accentBtn = document.getElementById("accentBtn");
  const content   = document.getElementById("content");
  const header    = document.querySelector(".hero");

  // toggles for rubric
  themeBtn?.addEventListener("click", () => document.body.classList.toggle("dark"));
  textBtn?.addEventListener("click",  () => content?.classList.toggle("big-text"));
  accentBtn?.addEventListener("click",() => header?.classList.toggle("header-accent"));

  // hover interaction
  document.querySelectorAll(".gallery figure").forEach(fig => {
    const img = fig.querySelector("img");
    const cap = fig.querySelector("figcaption");
    const original = cap.innerHTML;
    img.addEventListener("mouseenter",()=>{
      cap.innerHTML="Highlighted by JavaScript ✨";
      cap.classList.add("highlight");
      img.style.borderColor="#0ea5e9";
      img.style.transform="scale(1.02)";
    });
    img.addEventListener("mouseleave",()=>{
      cap.innerHTML=original;
      cap.classList.remove("highlight");
      img.style.borderColor="#ddd";
      img.style.transform="none";
    });
  });
});
