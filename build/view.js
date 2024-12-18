/******/ (() => { // webpackBootstrap
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.read-more-toggle');
  toggles.forEach(button => {
    button.addEventListener('click', () => {
      const content = button.previousElementSibling;
      content.classList.toggle('expanded');
      if (content.classList.contains('expanded')) {
        button.style.display = 'none';
      } else {
        button.style.display = 'inline-block';
      }
    });
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map