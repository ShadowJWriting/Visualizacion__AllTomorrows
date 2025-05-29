export function cargarModelo3D(idContenedor, rutaModelo) {
    const contenedor = document.getElementById(idContenedor);

    if (!contenedor) {
        console.error("Contenedor no encontrado:", idContenedor);
        return;
    }

    const modelViewer = document.createElement("model-viewer");

    modelViewer.setAttribute("src", rutaModelo);
    modelViewer.setAttribute("alt", "Modelo 3D");
    modelViewer.setAttribute("auto-rotate", "");
    modelViewer.setAttribute("camera-controls", "");
    modelViewer.setAttribute("shadow-intensity", "1");
    modelViewer.setAttribute("exposure", "1");
    modelViewer.style.width = "100%";
    modelViewer.style.height = "500px";

    contenedor.innerHTML = "";
    contenedor.appendChild(modelViewer);
}
