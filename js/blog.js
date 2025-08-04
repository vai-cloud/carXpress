// Smooth scroll to top
window.onload = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Toggle dark/light theme
function toggleTheme() {
  document.body.classList.toggle('light-mode');
}
