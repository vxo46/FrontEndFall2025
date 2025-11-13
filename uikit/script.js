// THEME TOGGLE (desktop + mobile buttons)
function setThemeButtonState(isDark, btn) {
  if (!btn) return;
  btn.setAttribute('aria-pressed', String(isDark));
}

function applySavedTheme() {
  try {
    const isDark = localStorage.getItem('theme') === 'dark';
    document.body.classList.toggle('dark', isDark);
    setThemeButtonState(isDark, document.getElementById('themeBtn'));
    setThemeButtonState(isDark, document.getElementById('themeBtnMobile'));
  } catch {}
}

function toggleTheme() {
  const isDark = !document.body.classList.contains('dark');
  document.body.classList.toggle('dark', isDark);
  try { localStorage.setItem('theme', isDark ? 'dark' : 'light'); } catch {}
  setThemeButtonState(isDark, document.getElementById('themeBtn'));
  setThemeButtonState(isDark, document.getElementById('themeBtnMobile'));
}

document.getElementById('themeBtn')?.addEventListener('click', toggleTheme);
document.getElementById('themeBtnMobile')?.addEventListener('click', toggleTheme);
applySavedTheme();

// HERO fade + parallax on scroll 
const hero = document.querySelector('.hero-banner');
if (hero) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    const fadePoint = window.innerHeight * 0.8;
    const opacity = Math.max(0, 1 - y / fadePoint);
    hero.style.opacity = opacity.toString();
    hero.style.transform = `translateY(${y * 0.2}px)`;
  });
}
