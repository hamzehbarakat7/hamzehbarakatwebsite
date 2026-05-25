const navLinks = document.querySelectorAll('.site-nav a');
const emailButton = document.getElementById('emailButton');
const themeButton = document.getElementById('themeButton');
const toast = document.getElementById('toast');

const showToast = (message) => {
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 1800);
};

if (emailButton) {
  emailButton.addEventListener('click', () => {
    navigator.clipboard.writeText('hamzehbarakat049@gmail.com')
      .then(() => showToast('Email copied to clipboard!'))
      .catch(() => showToast('Please copy manually: hamzehbarakat049@gmail.com'));
  });
}

if (themeButton) {
  themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    themeButton.textContent = isDark ? 'Light theme' : 'Dark theme';
  });
}

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + window.innerHeight / 2;
  document.querySelectorAll('section[id]').forEach((section) => {
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${section.id}`);
      });
    }
  });
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((item) => item.classList.remove('active'));
    link.classList.add('active');
  });
});
