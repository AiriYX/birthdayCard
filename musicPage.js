let input = document.getElementById("headshell");
let audio = document.getElementById("player");

input.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    audio.currentTime = 0;
    input.innerHTML = "Pause";
  } else {
    audio.pause();
    input.innerHTML = "Play";
  }
});

// Control the volume
function audioVolume(amount) {
  let changevolume = document.getElementsByTagName("audio")[0];
  changevolume.volume = amount;
}

document.addEventListener("DOMContentLoaded", function () {
  var player = document.getElementById("player");
  var dancingDogContainer = document.getElementById("dancingDogContainer");

  // Function to create a dancing dog image at a random position with a random size
  function createDancingDog() {
    var img = document.createElement("img");
    img.src = "util/dancingDog.gif";
    img.className = "dancing-dog";
    img.style.width = Math.random() * 100 + 50 + "px"; // Random size between 50px and 150px
    img.style.left = Math.random() * window.innerWidth + "px"; // Random horizontal position
    img.style.top = Math.random() * window.innerHeight + "px"; // Random vertical position
    dancingDogContainer.appendChild(img);
  }
  player.onplay = () => {
    player.currentTime = 2;
  };
  // Show dancing dogs when music plays
  player.onplay = function () {
    for (let i = 0; i < 20; i++) {
      // Create 20 dancing dogs
      createDancingDog();
    }
  };

  // Remove dancing dogs when music pauses or ends
  player.onpause = player.onended = function () {
    dancingDogContainer.innerHTML = ""; // Clear all dancing dogs
  };
});
