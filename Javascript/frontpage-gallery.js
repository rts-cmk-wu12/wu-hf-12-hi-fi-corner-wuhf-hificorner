const caption = document.querySelector("#caption");
const prev = document.querySelector("#back");
const next = document.querySelector("#next");
const slides = document.querySelectorAll(".slide");
const slideImg = document.querySelectorAll("figure img");
let current = 0;


prev.addEventListener("click", function() {
    slides[current].classList.remove("active", "left", "right");
    current++;
    if (current === slides.length) {
        current = 0;
    }
    slides[current].classList.add("active", "right");
   
});


next.addEventListener("click", function() {
    slides[current].classList.remove("active", "right", "left");
    current--;
    if (current < 0) {
        current = (slides.length - 1);
    }
    slides[current].classList.add("active", "left");
    
});