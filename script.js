document.addEventListener("DOMContentLoaded", function() {
    const sliderContent = document.querySelector('.slider-content');
    const slides = document.querySelectorAll('.image-card-wrapper');
    const totalSlides = slides.length;
    const slideWidth = slides[0].offsetWidth;
    console.log(slideWidth);
    let currentSlideIndex = 0;

    function goToSlide(index) {
        if (index < 0) {
            index = totalSlides - 1; // Go to the last slide if reaching the beginning
        } else if (index >= totalSlides) {
            index = 0; // Go to the first slide if reaching the end
        }
        sliderContent.style.transform = `translateX(-${index * slideWidth}px)`;
        currentSlideIndex = index;
    }

    function slideLeft() {
        goToSlide(currentSlideIndex - 1);
    }

    function slideRight() {
        goToSlide(currentSlideIndex + 1);
    }

    document.querySelector('.next-prev-buttons button:first-child').addEventListener('click', slideLeft);
    document.querySelector('.next-prev-buttons button:last-child').addEventListener('click', slideRight);

    // Smooth scroll behavior
    sliderContent.style.scrollBehavior = 'smooth';
});
