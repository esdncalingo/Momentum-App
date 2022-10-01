var slides = document.querySelectorAll('.slide');
let currentSlide = 0, lastSlide = 0;

const autoPlay = () => {
    if (currentSlide !== 7) {
        // slides[currentSlide].style.opacity = 1;
        slides[currentSlide].classList.add('active');
        currentSlide += 1;
        
    } else {
        
        for (i = 0; i < slides.length; i++){
            // slides[i].style.opacity = 0;
            slides[i].classList.remove('active');
        }
        currentSlide = 0;
        slides[currentSlide].classList.add('active');
        // slides[currentSlide].style.opacity = 1;
    }
    
    setTimeout(autoPlay, 10000);
}