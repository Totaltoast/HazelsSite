// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add more animations and interactions as you learn
document.addEventListener('DOMContentLoaded', () => {
    const hero = document.getElementById('hero');
    const circle = document.querySelector('.circle');

    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = hero.offsetWidth / 2;
        const centerY = hero.offsetHeight / 2;

        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;

        circle.style.transform = `translate(${deltaX * 20}px, ${deltaY * 20}px)`;
    });

    hero.addEventListener('mouseleave', () => {
        circle.style.transform = 'translate(0, 0)';
    });
});
