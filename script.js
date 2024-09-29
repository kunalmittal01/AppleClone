const sliderWrapper = document.querySelector('.slider-wrapper');
const navDots = document.querySelectorAll('.slider-nav li');

// Add event listeners to each dot
navDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        // Calculate the scroll position based on card index
        const scrollPosition = index * window.innerWidth;

        // Scroll the slider wrapper to the position of the target card
        sliderWrapper.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });

        // Highlight the active dot
        navDots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
    });
});