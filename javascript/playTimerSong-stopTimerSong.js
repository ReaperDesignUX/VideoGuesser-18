
function playTimerSong() {
    var audio = document.getElementById('timer_song');
    audio.currentTime = 0;
    audio.volume = 0.1;
    audio.play();
}
function stopTimerSong() {
    var audio = document.getElementById('timer_song');
    audio.pause();
}