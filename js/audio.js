const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progressBar');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');

function formatTime(seconds) {
    const min = Math.floor(seconds / 60) || 0;
    const sec = Math.floor(seconds % 60) || 0;
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
}

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

    audio.addEventListener('loadedmetadata', () => {
        progressBar.max = audio.duration;
        durationEl.textContent = formatTime(audio.duration);
    });

    audio.addEventListener('timeupdate', () => {
        progressBar.value = audio.currentTime;
        currentTimeEl.textContent = formatTime(audio.currentTime);
    });

    progressBar.addEventListener('input', () => {
        audio.currentTime = progressBar.value;
    });

    audio.addEventListener('error', () => {
        console.error("Error al cargar el archivo de audio");
    });
}
