document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((link, index) => {
    link.style.animation = `dropIn 0.6s ease-out forwards`;
    link.style.animationDelay = `${0.2 + index * 0.2}s`;
  });
});
