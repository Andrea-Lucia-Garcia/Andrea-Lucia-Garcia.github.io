const handleFirstTab = (e) => {
  if (e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing');
    window.removeEventListener('keydown', handleFirstTab);
    window.addEventListener('mousedown', handleMouseDownOnce);
  }
};

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing');
  window.removeEventListener('mousedown', handleMouseDownOnce);
  window.addEventListener('keydown', handleFirstTab);
};

window.addEventListener('keydown', handleFirstTab);

/* -----------------------------------------
   Botón volver arriba
----------------------------------------- */

const backToTopButton = document.querySelector('.back-to-top');

const alterStyles = (isVisible) => {
  if (!backToTopButton) return;

  backToTopButton.style.visibility = isVisible ? 'visible' : 'hidden';
  backToTopButton.style.opacity = isVisible ? '1' : '0';
  backToTopButton.style.transform = isVisible ? 'scale(1)' : 'scale(0)';
};

window.addEventListener('scroll', () => {
  const showButton = window.scrollY > 700;
  alterStyles(showButton);
});
