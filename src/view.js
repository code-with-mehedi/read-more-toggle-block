document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.read-more-toggle');

    toggles.forEach((button) => {
        button.addEventListener('click', () => {
            const content = button.previousElementSibling;
            const expanded = content.classList.toggle('expanded');

            if (expanded) {
                content.style.maxHeight = content.scrollHeight + 'px'; 
                button.style.display = 'none';
            } else {
                content.style.maxHeight = null;
                button.style.display = 'inline-block';
            }
        });
    });
});
