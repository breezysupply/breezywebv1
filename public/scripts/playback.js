document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById('expandGrid325-2');
    var video = document.getElementById('workoutVideo');

    checkbox.addEventListener('change', function() {
        if(checkbox.checked) {
            video.play();
        } else {
            video.pause();
        }
    });
});
