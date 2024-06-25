function startConfetti() {
  confetti();
  confettiInterval = setInterval(confetti, 3000);
  clearInterval(confettiInterval);
}

function stopConfetti() {}
