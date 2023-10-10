window.onload = () => {
  setTimeout(() => {
    const loadingScreen = document.getElementById("loading-bg");
    loadingScreen.style.opacity = 1;
    setInterval(() => {
      loadingScreen.style.opacity -= 0.1;

      if (loadingScreen.style.opacity <= 0) {
        loadingScreen.remove();
      }
    }, 20);
  }, 1000);
};
