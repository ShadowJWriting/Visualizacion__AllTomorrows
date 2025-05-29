// Gráfico modal
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
    const organModal = document.getElementById('organModal');
    if (event.key === 'Escape') {
        if (graphModal.classList.contains('show')) closeGraph();
        if (organModal.classList.contains('show')) closeOrgan();
    }
});

function outsideClick(event) {
    const modalContent = document.getElementById('modalContent');
    if (!modalContent.contains(event.target)) {
        closeGraph();
    }
}

// Órganos: cargar con iframe
function focusOrgan(el) {
    const organSrc = el.dataset.organSrc;
    const organContent = document.getElementById('organContent');
    const organModal = document.getElementById('organModal');

    if (organSrc) {
        organContent.innerHTML = `
            <iframe src="${organSrc}" frameborder="0" style="width:100%; height:90vh;"></iframe>
        `;
        organModal.classList.add('show');
    }
}

// Cierre de modal de órganos
function closeOrganModal(event) {
    const content = document.getElementById('organModalContent');
    if (!content.contains(event.target)) {
        closeOrgan();
    }
}

function closeOrgan() {
    const organModal = document.getElementById('organModal');
    const organContent = document.getElementById('organContent');
    organModal.classList.remove('show');
    organContent.innerHTML = '';
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

// Inicialización de navegación 
window.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split("/").pop().replace(".html", "");
    const currentIndex = pages.indexOf(currentPage);

    const leftArrow = document.querySelector(".nav-arrow.left");
    const rightArrow = document.querySelector(".nav-arrow.right");

    if (leftArrow && currentIndex === 0) leftArrow.style.display = 'none';
    if (rightArrow && currentIndex === pages.length - 1) rightArrow.style.display = 'none';
});

window.addEventListener("load", () => {
    const loader = document.getElementById("loadingScreen");
    if (loader) {
        setTimeout(() => {
            loader.style.display = "none";
        }, 4000); 
    }
});

