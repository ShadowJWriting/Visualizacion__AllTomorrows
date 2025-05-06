function focusGraph(el) {
  document.querySelectorAll('.graph').forEach(g => g.classList.remove('active'));
  el.classList.add('active');
}

function navigate(direction) {
  alert(`Navegar a la pestaña: ${direction}`);
}
