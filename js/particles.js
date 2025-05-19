const container = document.querySelector(".particles-container");

function createParticle() {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    const size = Math.random() * 8 + 4;
    const posX = Math.random() * window.innerWidth;
    const delay = Math.random() * 5;
    const duration = Math.random() * 20 + 10;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}px`;
    particle.style.bottom = `-20px`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;

    container.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, (duration + delay) * 1000);
}

setInterval(createParticle, 300);
