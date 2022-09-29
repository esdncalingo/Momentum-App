var slides = document.querySelectorAll('.slide');
let currentSlide = 0, lastSlide = 0;

const autoPlay = () => {
    if (currentSlide !== 5) {
        slides[currentSlide].style.opacity = 1;
        currentSlide += 1;
        
    } else {
        
        for (i = 0; i < slides.length; i++){
            slides[i].style.opacity = 0;
        }
        currentSlide = 0;
        slides[currentSlide].style.opacity = 1;
    }
    
    setTimeout(autoPlay, 10000);
}