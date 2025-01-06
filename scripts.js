// Crear confeti
function createConfetti() {
    const colors = ["#ff6f61", "#ff9a9e", "#fad0c4", "#ffb3ba"]; // Colores del confeti
    for (let i = 0; i < 30; i++) { // Número de confetis
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.setProperty("--i", i); // Índice de confeti
        confetti.style.setProperty("--confetti-color", colors[i % colors.length]); // Colores alternados
        document.body.appendChild(confetti); // Agregar confeti al DOM
    }
}

// Llamar a la función al cargar la página
window.onload = createConfetti;

// Seleccionar el audio y el botón
const music = document.getElementById("background-music");
const toggleButton = document.getElementById("music-toggle");

// Estado inicial
let isPlaying = true;

// Función para pausar/reanudar la música
toggleButton.addEventListener("click", () => {
    if (isPlaying) {
        music.pause();
        toggleButton.textContent = "🔇";
    } else {
        music.play();
        toggleButton.textContent = "🔊  ";
    }
    isPlaying = !isPlaying;
});

document.addEventListener("DOMContentLoaded", () => {
    const fadeIns = document.querySelectorAll(".fade-in");

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Detiene la observación una vez visible
            }
        });
    }, {
        threshold: 0.1 // 10% del elemento visible para activarse
    });

    fadeIns.forEach(fadeIn => {
        appearOnScroll.observe(fadeIn);
    });
});
