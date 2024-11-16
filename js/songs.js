function playSong(audioId) {
    const audio = document.getElementById(audioId);

    // Stop any currently playing audio
    document.querySelectorAll('audio').forEach((audioEl) => {
        if (!audioEl.paused && audioEl.id !== audioId) {
            audioEl.pause();
            audioEl.currentTime = 0;
        }
    });

    // Play the selected audio
    audio.play();
}

function stopSong(audioId) {
    const audio = document.getElementById(audioId);
    audio.pause();
    audio.currentTime = 0;
}
