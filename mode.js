var darkModeToggle = document.getElementById('dark-mode-toggle');
var bodyElement = document.body;

darkModeToggle.addEventListener('change', function() {
  bodyElement.classList.toggle('dark-mode');
});
