function startConfetti() {
  confetti();
  confettiInterval = setInterval(confetti, 3000);
  clearInterval(confettiInterval);
}

// Assuming you want to target the first element with class "confetti"
let input = document.getElementsByClassName("confetti")[0];
let audio = document.getElementById("confettiAudio");

// Corrected function declaration and added event listener
input.addEventListener("click", function () {
  if (audio.paused) {
    audio.currentTime = 0.4;
    audio.play();

    // Stop playing after 10 seconds from the start time
    setTimeout(function () {
      audio.pause();
      audio.currentTime = 0; // Optionally reset to start
    }, 4000); // Adjust the duration as needed (10 seconds in this example)
  }
});
