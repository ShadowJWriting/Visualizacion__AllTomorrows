function focusGraph(el) {
    document.querySelectorAll('.graph').forEach(g => g.classList.remove('active'));
    el.classList.add('active');

    const graphSrc = el.dataset.id;
    if (graphSrc) {
        const graphModal = document.getElementById('graphModal');
        const graphFrame = document.getElementById('graphFrame');
        graphFrame.src = graphSrc;
        graphModal.classList.add('show');
    }
}

//Gráfico modal
function closeGraph() {
    const graphModal = document.getElementById('graphModal');
    const graphFrame = document.getElementById('graphFrame');
    graphModal.classList.remove('show');

    setTimeout(() => {
        graphFrame.src = '';
    }, 300); 
}

document.addEventListener('keydown', (event) => {
    const graphModal = document.getElementById('graphModal');
    if (event.key === 'Escape' && graphModal.classList.contains('show')) {
        closeGraph();
    }
});

function outsideClick(event) {
    const modalContent = document.getElementById('modalContent');
    if (!modalContent.contains(event.target)) {
        closeGraph();
    }
}

//Gráfico modal - órganos

function focusOrgan(el) {
    const organImg = el.dataset.img;
    if (organImg) {
        const graphModal = document.getElementById('graphModal');
        const graphFrame = document.getElementById('graphFrame');
        graphFrame.src = organImg;
        graphModal.classList.add('show');
    }
}

// Navegación entre páginas
const pages = ["human", "cyborg", "astralis", "luminis", "gravital"];

function navigate(direction) {
    const currentPage = window.location.pathname.split("/").pop().replace(".html", "");
    const currentIndex = pages.indexOf(currentPage);

    let targetIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;

    if (targetIndex >= 0 && targetIndex < pages.length) {
        const targetPage = pages[targetIndex];
        window.location.href = `${targetPage}.html`;
    }
}

// Inicialización
window.addEventListener('DOMContentLoaded', () => {
    const activeGraph = document.querySelector('.graph.active');
    if (!activeGraph) {
        const firstGraph = document.querySelector('.graph');
        if (firstGraph) focusGraph(firstGraph);
    }

    const currentPage = window.location.pathname.split("/").pop().replace(".html", "");
    const currentIndex = pages.indexOf(currentPage);

    const leftArrow = document.querySelector(".nav-arrow.left");
    const rightArrow = document.querySelector(".nav-arrow.right");

    if (leftArrow && currentIndex === 0) leftArrow.style.display = 'none';
    if (rightArrow && currentIndex === pages.length - 1) rightArrow.style.display = 'none';
});
