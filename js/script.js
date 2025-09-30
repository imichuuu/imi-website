document.addEventListener("DOMContentLoaded", () => {
  // ——— Rotating greetings ———
  const greetings = [
    "Hello!",        // English
    "Aloha!",        // Hawaiian
    "Ciao!",         // Italian
    "Konnichiwa!",   // Japanese
    "Annyeong!",     // Korean
    "Ni Hao!",       // Chinese (Mandarin)
    "Kamusta!"       // Filipino
  ];

  let index = 0;
  const greetingElement = document.getElementById("greeting");
  if (greetingElement) {
    greetingElement.textContent = greetings[0]; 
    setInterval(() => {
      index = (index + 1) % greetings.length;
      greetingElement.textContent = greetings[index];
    }, 2000);
  }

  // ——— Age ———
  function calculateAge(birthDate) {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) age--;
    return age;
  }

  const birthDate = new Date(2003, 11, 20); 
  const ageEl = document.getElementById("age");
  if (ageEl) ageEl.textContent = calculateAge(birthDate);

  // ——— Footer year ———
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

  (function () {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.getElementById('primary-nav');

    if (!toggle || !nav) return;

    // open/close on click
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      nav.classList.toggle('open', !isOpen);
    });

    // close when clicking a link (optional)
    nav.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
      }
    });

    // close on resize back to desktop
    const mq = window.matchMedia('(min-width: 769px)');
    mq.addEventListener('change', (e) => {
      if (e.matches) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
      }
    });
  })();