/******/ (() => { // webpackBootstrap
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.read-more-toggle');
  toggles.forEach(button => {
    button.addEventListener('click', () => {
      const content = button.previousElementSibling;
      const expanded = content.classList.toggle('expanded');
      if (expanded) {
        content.style.maxHeight = content.scrollHeight + 'px'; // Set height dynamically
        button.style.display = 'none';
      } else {
        content.style.maxHeight = null; // Reset height
        button.style.display = 'inline-block';
      }
    });
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map