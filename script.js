// Secret bg toggle 
if (localStorage.getItem('bg-alt') === 'true') {
  document.body.classList.add('bg-alt');
}

document.querySelector('.home-hero .profile-img')?.addEventListener('click', () => {
  document.body.classList.toggle('bg-alt');
  localStorage.setItem('bg-alt', document.body.classList.contains('bg-alt'));
});

// Secret 1337 modal
const leetModal = document.createElement('div');
leetModal.className = 'modal-overlay';
leetModal.innerHTML = `
  <div class="modal-card">
    <button class="modal-close">&times;</button>
    <p>tittut!</p>
  </div>`;
document.body.appendChild(leetModal);
leetModal.addEventListener('click', e => { if (e.target === leetModal) leetModal.classList.remove('open'); });
leetModal.querySelector('.modal-close').addEventListener('click', () => leetModal.classList.remove('open'));

let keyBuffer = '';
document.addEventListener('keydown', e => {
  keyBuffer = (keyBuffer + e.key).slice(-4); //även om andra siffror knappas in först så reagerar den på att de 4 sista är rätt siffer kombination 
  if (keyBuffer === '1337') leetModal.classList.add('open');
});

// Project modals
document.querySelectorAll('.project-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById(btn.dataset.modal)?.classList.add('open');
  });
});

document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.classList.remove('open');
  });
  overlay.querySelector('.modal-close')?.addEventListener('click', () => overlay.classList.remove('open'));
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
  }
});

// Hamburger toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggle?.addEventListener('click', () => navLinks.classList.toggle('open'));

navLinks?.addEventListener('click', e => {
  if (e.target.closest('a')) navLinks.classList.remove('open');
});
