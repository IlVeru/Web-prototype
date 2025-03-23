document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("toggleButton");
    const audio = document.getElementById("audio");

    button.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            button.textContent = "BGM ON";
            button.classList.add("on");
        } else {
            audio.pause();
            audio.currentTime = 0; // Reset audio ke awal saat berhenti
            button.textContent = "BGM OFF";
            button.classList.remove("on");
        }
        
    });
});

