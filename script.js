const sliderWrapper = document.querySelector('.slider-wrapper');
const navDots = document.querySelectorAll('.slider-nav li');
const store = document.querySelectorAll('.store-icon');
const storelist = document.getElementsByClassName('store-list')[0];
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

store.forEach(ele => {
    ele.addEventListener('mouseover' ,()=>{
        storelist.style.height = '18rem';
        storelist.style.padding= '2rem';
        document.querySelector('nav').style.backgroundColor = '#161617';
    })
    
    ele.addEventListener('mouseout' ,()=>{
        storelist.style.height = '0rem'
        storelist.style.padding= '0rem';
        document.querySelector('nav').style.backgroundColor = '#454545';
    })
})
