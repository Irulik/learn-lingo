document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', () => {
        const dataIndex = button.parentElement.dataset.index; 
        const cardId = `card${dataIndex}`;
        const parentContainer = document.querySelector(`[data-index="${dataIndex}"]`);
        const additionalInfo = parentContainer.querySelector('.tutor-readmore');
        const bookLessonButton = parentContainer.querySelector('.book-button');

        if (additionalInfo) {
            additionalInfo.classList.toggle('tutor-readmore--show');
        }

        if (button.classList.contains('read-more-btn')) {
            button.classList.toggle('is-hidden');
        }

        if (bookLessonButton) {
            bookLessonButton.classList.toggle('is-hidden');
        }

        parentContainer.classList.toggle('tutor-card--expanded');
    });
});
