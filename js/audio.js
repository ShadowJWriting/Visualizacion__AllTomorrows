const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progressBar');

if (audio && playPauseBtn && progressBar) {
    playPauseBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play().then(() => {
                playPauseBtn.textContent = '⏸';
            }).catch((err) => {
                console.error("Error al reproducir audio:", err);
            });
        } else {
            audio.pause();
            playPauseBtn.textContent = '▶';
        }
    });

    audio.addEventListener('timeupdate', () => {
        progressBar.value = audio.currentTime;
        progressBar.max = audio.duration;
    });

    progressBar.addEventListener('input', () => {
        audio.currentTime = progressBar.value;
    });

    audio.addEventListener('loadeddata', () => {
        console.log("Audio cargado correctamente");
    });

    audio.addEventListener('error', () => {
        console.error("Error al cargar el archivo de audio");
    });
}
