document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.read-more-toggle');

    toggles.forEach((button) => {
        button.addEventListener('click', () => {
            const content = button.previousElementSibling; // Get the previous sibling, which is the .read-more-content div
            content.classList.toggle('expanded'); // Toggle the "expanded" class to show/hide content

            // Update the button text based on whether the content is expanded
            button.textContent = content.classList.contains('expanded')
                ? 'Read Less'
                : 'Read More';
        });
    });
});
