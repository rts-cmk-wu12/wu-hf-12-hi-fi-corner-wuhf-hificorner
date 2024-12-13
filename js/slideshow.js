const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

nextButton.addEventListener('click', nextSlide)
prevButton.addEventListener('click', prevSlide);

let slideIndex = 1;
showSlides(slideIndex);

function nextSlide(){
  showSlides(slideIndex += 1)
}
function prevSlide(){
  showSlides(slideIndex -= 1)
}


// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}