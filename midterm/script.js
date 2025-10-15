// 1) Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});

// 2) Theme toggle (light/dark)
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
  const dark = document.body.classList.toggle('dark');
  themeBtn.setAttribute('aria-pressed', String(dark));
  try {
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  } catch (e) {}
});
// Load saved theme
try {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    themeBtn.setAttribute('aria-pressed', 'true');
  }
} catch (e) {}

// 3) Tabs
const btnCaves = document.getElementById('btn-caves');
const btnStreet = document.getElementById('btn-street');
const tabCaves = document.getElementById('tab-caves');
const tabStreet = document.getElementById('tab-street');

function selectTab(which) {
  const caves = which === 'caves';
  btnCaves.setAttribute('aria-selected', caves ? 'true' : 'false');
  btnStreet.setAttribute('aria-selected', caves ? 'false' : 'true');
  tabCaves.setAttribute('aria-hidden', caves ? 'false' : 'true');
  tabStreet.setAttribute('aria-hidden', caves ? 'true' : 'false');
}
btnCaves.addEventListener('click', () => selectTab('caves'));
btnStreet.addEventListener('click', () => selectTab('street'));

// 4) Lightbox for gallery images
const dlg = document.getElementById('lightbox');
const lightImg = document.getElementById('lightImg');
const lightCap = document.getElementById('lightCap');

document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    lightImg.src = img.src;
    lightCap.textContent = img.dataset.caption || img.alt || '';
    dlg.showModal();
  });
});

