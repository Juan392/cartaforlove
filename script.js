const playButton = document.getElementById('play-button');
const progressBar = document.getElementById('progress-bar');
const heartProgress = document.getElementById('heart-progress');
let audio = new Audio('https://raw.githubusercontent.com/Juan392/cartaforlove/21e1802a09e4215eb1726f85c2d9d9997a6c81fc/only-official-audio.mp3');

playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playButton.textContent = '⏸️';
    } else {
        audio.pause();
        playButton.textContent = '❤️';
    }
});

audio.addEventListener('timeupdate', () => {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
    heartProgress.style.left = `${progressPercent}%`;
});
