document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', () => {

            const isCurrentlyActive = card.classList.contains('active');

            cards.forEach(c => c.classList.remove('active'));

            if (!isCurrentlyActive) {
                card.classList.add('active');
            }
        });
    });
});