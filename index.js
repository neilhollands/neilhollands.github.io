// JavaScript (script.js)
window.onload = function() {
    const audioElements = document.querySelectorAll('audio');

    audioElements.forEach(audio => {
        audio.onplay = function() {
            pauseOtherPlayers(audio);
        };
    });

    function pauseOtherPlayers(currentAudio) {
        audioElements.forEach(audio => {
            if (audio !== currentAudio && !audio.paused) {
                audio.pause();
            }
        });
    }

    function rewindAll() {
        audioElements.forEach(audio => {
            audio.currentTime = 0;
        });
    }
};
