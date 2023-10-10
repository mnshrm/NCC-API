window.onload = () => {
  setTimeout(() => {
    const loadingScreen = document.getElementById("loading-bg");
    loadingScreen.style.opacity = 1;
    setInterval(() => {
      loadingScreen.style.opacity -= 0.15;

      if (loadingScreen.style.opacity <= 0) {
        loadingScreen.remove();
      }
    }, 50);
  }, 1000);
};
