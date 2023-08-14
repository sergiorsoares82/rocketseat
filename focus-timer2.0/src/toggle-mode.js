let darkMode = true;

const toggleModeButton = document.querySelector('#toggle-mode');

const toggleModeFunction = (event) => {
  document.documentElement.classList.toggle('light');
  const mode = darkMode ? 'Light' : 'Dark';
  event.currentTarget.querySelector('span').textContent = `${mode} ativado!`;
  darkMode = !darkMode;
};

toggleModeButton.addEventListener('click', toggleModeFunction);
