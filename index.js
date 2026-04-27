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

/* -----------------------------------------
   Modo claro / oscuro
----------------------------------------- */

const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

let currentTheme = 'dark';

try {
  currentTheme = localStorage.getItem('theme') || 'dark';
} catch (error) {
  currentTheme = 'dark';
}

html.setAttribute('data-theme', currentTheme);

if (themeToggle) {
  themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
  themeToggle.setAttribute(
    'aria-label',
    currentTheme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'
  );

  themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', currentTheme);
    themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
    themeToggle.setAttribute(
      'aria-label',
      currentTheme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'
    );

    try {
      localStorage.setItem('theme', currentTheme);
    } catch (error) {
    }
  });
}
