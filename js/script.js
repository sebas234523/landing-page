

const sliders = [
        "./img/pizzeria/hero-pizzery-img.jpg",
        "./img/pizzeria/hero-pizzery-img-2.jpg"
    ]
function showModal(modal) {
    const seccion = document.getElementById(modal)
    seccion.style.display = "true"
}
function disableModal(modal) {
    const seccion = document.getElementById(modal)
    seccion.style.display = "none"
}

function carruselHero() {  
    const hero = document.getElementById("pizzeria")
    const buttonNext = document.querySelector('#go_right');
    const buttonPrev = document.querySelector('#go_left');
    let currentIndex = 0;

    const changeSlide = (change) => {
        currentIndex += change
        if (currentIndex < 0) {
            currentIndex = sliders.length - 1;
        } else if (currentIndex >= sliders.length) {
            currentIndex = 0;
        }
        hero.style.backgroundImage = `url(${sliders[currentIndex]})`;   
    }
    // Asigna los eventos a los botones
    buttonNext.addEventListener('click', () => changeSlide(1));
    buttonPrev.addEventListener('click', () => changeSlide(-1));
    console.log("imagencambniada");
}
document.addEventListener('DOMContentLoaded', () => {
   carruselHero();
});