document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href')
      ? link.getAttribute('href').replace('#', '')
      : link.dataset.target;
    const section = document.getElementById(targetId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 40, 
        behavior: 'smooth'
      });
    }
  });
});

function submitForm(e) {
  e.preventDefault();
  const status = document.getElementById('status');
  status.textContent = 'Envoi en cours...';
  setTimeout(() => {
    status.textContent = 'Merci — votre message a été envoyé !';
    e.target.reset();
  }, 1000);
}
