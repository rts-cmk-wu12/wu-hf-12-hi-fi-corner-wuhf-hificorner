let slider = document.querySelector(".gallery-slider .gallery-list");
let items = document.querySelectorAll(".gallery-slider .gallery-list .gallery-item");
let nextButton = document.querySelector(".next-slide");
let prevButton = document.querySelector(".prev-slide");

let active = 0;

function updateSlider() {
  slider.style.left = -active * items[0].offsetWidth + "px";
}

function nextSlide() {
  active++;
  if (active >= items.length) {
    active = 0;
  }
  updateSlider();
}

function prevSlide() {
  active--;
  if (active < 0) {
    active = items.length - 1;
  }
  updateSlider();
}

if (nextButton) {
  nextButton.onclick = nextSlide;
}

if (prevButton) {
  prevButton.onclick = prevSlide;
}

let autoSlide = setInterval(nextSlide, 3000);

window.onresize = function() {
  updateSlider();
};
