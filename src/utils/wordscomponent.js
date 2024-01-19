// wordAnimation.js
export default function startAnimation() {
    let words = document.querySelectorAll('.word');
    let wordBox = document.querySelector('#wordBox');
    let wordsContainer = document.querySelector('#words');

    // Asegúrate de que solo la primera palabra es visible al principio
    wordsContainer.style.transform = 'translateY(0)';

    let currentWordIndex = 0;
    setInterval(() => {
        // Calcula la nueva posición de las palabras
        let newY = -(currentWordIndex + 1) * wordBox.offsetHeight;

        // Anima las palabras para que se desplacen a la nueva posición
        anime({
            targets: wordsContainer,
            translateY: newY,
            duration: 1000, // Duración de la animación en milisegundos
            easing: 'easeInOutQuad' // Tipo de animación
        });

        // Pasar a la siguiente palabra
        currentWordIndex = (currentWordIndex + 1) % words.length;
    }, 2000); // Cambia la palabra cada 2 segundos
}