document.addEventListener('DOMContentLoaded', () => {
  const yearNode = document.getElementById('year');
  const themeButton = document.querySelector('.theme-toggle');
  const themeLabel = document.querySelector('.toggle-label');

  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  const applyTheme = (theme) => {
    const isDark = theme === 'dark';
    document.body.dataset.theme = theme;

    if (themeButton) {
      themeButton.setAttribute('aria-pressed', String(isDark));
      themeButton.setAttribute(
        'aria-label',
        isDark ? 'Ativar tema claro' : 'Ativar tema escuro'
      );
    }

    if (themeLabel) {
      themeLabel.textContent = isDark ? 'Tema claro' : 'Tema escuro';
    }
  };

  const savedTheme = localStorage.getItem('theme');
  const initialTheme = savedTheme || 'dark';

  applyTheme(initialTheme);

  if (themeButton) {
    themeButton.addEventListener('click', () => {
      const nextTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', nextTheme);
      applyTheme(nextTheme);
    });
  }
});
