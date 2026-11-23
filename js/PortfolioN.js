const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMsg');
const copyEmailButton = document.getElementById('copyEmail');
const emailAddress = 'richardsonnicolas184@gmail.com';

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  formMessage.textContent = `Thanks, ${name}! This demo form does not send messages yet.`;
  contactForm.reset();
});

copyEmailButton?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(emailAddress);
    formMessage.textContent = 'Email copied to clipboard.';
  } catch {
    formMessage.textContent = `Email: ${emailAddress}`;
  }
});

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.getElementById(link.hash.slice(1));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'start',
    });
  });
});
