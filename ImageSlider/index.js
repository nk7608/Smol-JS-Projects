const slides = document.querySelectorAll(".slider img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initilaizeSlider);

function initilaizeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displayImage");
  }
  intervalId = setInterval(nextSlide, 5000);
}

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("displayImage");
  });
  slides[index].classList.add("displayImage");
}

function prevSlide() {
  clearInterval(intervalId);
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}
