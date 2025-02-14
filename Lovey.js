document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById('valentines-song');

  // Ensure correct volume
  audio.volume = 1.0;  
  audio.loop = true;

  // Try to play audio immediately
  audio.play().then(() => {
      console.log("Autoplay successful.");
  }).catch(() => {
      console.log("Autoplay blocked. Waiting for user interaction...");
  });

  // If autoplay is blocked, play on user interaction
  document.addEventListener("click", () => {
      if (audio.paused) {
          audio.play();
      }
  });
});
