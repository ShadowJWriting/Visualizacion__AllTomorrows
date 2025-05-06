function focusGraph(el) {
  document.querySelectorAll('.graph').forEach(g => g.classList.remove('active'));
  el.classList.add('active');
}

const pages = ["human", "cyborg", "astralis", "luminis", "gravital"];

function navigate(direction) {
  const currentPage = window.location.pathname.split("/").pop().replace(".html", "");
  const currentIndex = pages.indexOf(currentPage);

  if (direction === 'next' && currentIndex < pages.length - 1) {
    window.location.href = pages[currentIndex + 1] + '.html';
  } else if (direction === 'prev' && currentIndex > 0) {
    window.location.href = pages[currentIndex - 1] + '.html';
  }
}

// Ocultar flechas según posición
window.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split("/").pop().replace(".html", "");
  const currentIndex = pages.indexOf(currentPage);

  const leftArrow = document.querySelector(".nav-arrow.left");
  const rightArrow = document.querySelector(".nav-arrow.right");

  if (leftArrow && currentIndex === 0) leftArrow.style.display = 'none';
  if (rightArrow && currentIndex === pages.length - 1) rightArrow.style.display = 'none';
});
