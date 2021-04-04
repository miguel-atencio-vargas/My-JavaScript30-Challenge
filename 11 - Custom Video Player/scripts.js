// 1. Get our elements
const video = document.querySelector('.player__video');
const controls = document.querySelector('.player__controls');

const toggle = controls.querySelector('.toggle');
const ranges = controls.querySelectorAll('.player__slider');
const progress = controls.querySelector('.progress');
const progressBar = controls.querySelector('.progress__filled');
const skipButtons  = controls.querySelectorAll('[data-skip]');
const fullscreenBtn = controls.querySelector('.fullscreen');

// 2. Built out functions

function playPauseVideo() {
    video.paused ? video.play() : video.pause();
}

function updateButton() {
    this.paused ? toggle.innerHTML = '►' : toggle.innerHTML = '| |';
}

function skip() {
    const newCurrent = video.currentTime + Number(this.dataset.skip);
    video.currentTime = newCurrent;
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    // const percent = (progressBar.clientWidth / progress.clientWidth) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function fullscreenActivate(e) {
    if(video.requestFullscreen){
        video.requestFullscreen();
    }
}

// 3. Hook the event listeners

// Pausa o reproduce el video
video.addEventListener('click', playPauseVideo);
toggle.addEventListener('click', playPauseVideo);

// Intercambia el icono del boton de reproducir
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

// Sube el volumen y la velocidad del video
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

// Adelanta o retrocede el video
skipButtons.forEach(button => button.addEventListener('click', skip));

// Actualiza el progressBar
video.addEventListener('timeupdate', handleProgress);

// Modifica la reproduccion del video cuando se hace click sobre el progressBar
let mousedown = false;
progress.addEventListener('click', scrub);

progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

// Intercambia entre pantalla norma y fullscreen
fullscreenBtn.addEventListener('click', fullscreenActivate);