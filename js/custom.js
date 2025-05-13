function focusGraph(el) {
  document.querySelectorAll('.graph').forEach(g => g.classList.remove('active'));
  el.classList.add('active');
}

const pages = ["human", "cyborg", "astralis", "luminis", "gravital"];

function navigate(direction) {
    const next = document.body.dataset.next;
    const prev = document.body.dataset.prev;

    if (direction === 'next' && next) {
        window.location.href = `${next}.html`;
    } else if (direction === 'prev' && prev) {
        window.location.href = `${prev}.html`;
    }
}

// Ocultar flechas según posición
window.addEventListener('DOMContentLoaded', () => {
    // Seleccionar automáticamente el primer gráfico si ninguno está activo
    const activeGraph = document.querySelector('.graph.active');
    if (!activeGraph) {
        const firstGraph = document.querySelector('.graph');
        if (firstGraph) focusGraph(firstGraph);
    }

    // Flechas
    const currentPage = window.location.pathname.split("/").pop().replace(".html", "");
    const currentIndex = pages.indexOf(currentPage);

    const leftArrow = document.querySelector(".nav-arrow.left");
    const rightArrow = document.querySelector(".nav-arrow.right");

    if (leftArrow && currentIndex === 0) leftArrow.style.display = 'none';
    if (rightArrow && currentIndex === pages.length - 1) rightArrow.style.display = 'none';
});
