document.querySelectorAll('.playback-controls i').forEach(button => {
    button.addEventListener('click', function () {
        const audioId = this.getAttribute('data-id');
        const audioElement = document.getElementById(audioId);
        const isPlaying = this.classList.contains('playing');

        if (isPlaying) {
            audioElement.pause();
            this.classList.remove('playing');
            this.classList.add('fa-play-circle');
            this.classList.remove('fa-pause-circle');
        } else {
            document.querySelectorAll('audio').forEach(audio => audio.pause());
            document.querySelectorAll('.playback-controls i').forEach(btn => {
                btn.classList.remove('playing');
                btn.classList.add('fa-play-circle');
                btn.classList.remove('fa-pause-circle');
            });
            audioElement.play();
            this.classList.add('playing');
            this.classList.remove('fa-play-circle');
            this.classList.add('fa-pause-circle');
        }
    });
});