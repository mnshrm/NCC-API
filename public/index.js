document.body.classList.add("no-scroll");

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("row");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "";
  setTimeout(showSlides, 4000);
}

window.onload = () => {
  const loadingScreen = document.getElementById("loading-bg");
  loadingScreen.style.opacity = 1;
  setInterval(() => {
    loadingScreen.style.opacity -= 0.1;

    if (loadingScreen.style.opacity <= 0) {
      loadingScreen.remove();
    }
  }, 20);
  setTimeout(() => {
    document.body.classList.remove("no-scroll");
  }, 10);
};
