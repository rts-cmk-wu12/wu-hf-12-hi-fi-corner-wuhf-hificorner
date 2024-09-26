



let slideIndex = 0;
console.log("befor:");
fetch('db.json')

    .then(response => response.json())
    .then(data => {
        console.log("data:"+data);
        const slidesContainer = document.getElementById('slides');
        data.products.forEach(product => {
            const slide = document.createElement('div');
            slide.classList.add('slide');
            const img = document.createElement('img');
            img.src = product.image;
            slide.appendChild(img);
            slidesContainer.appendChild(slide);
        });
        showSlides(slideIndex);
    });

function showSlides(n) {
    const slides = document.querySelectorAll('.slide');
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}




/*let currentIndex = 0;
let slidesData = [];

fetch('db.json')
    .then(response => response.json())
    .then(data => {
        slidesData = data.db;
        displaySlides();
    });

function displaySlides() {
    const slidesContainer = document.getElementById('slides');
    slidesContainer.innerHTML = slidesData.map(slide => `
        <div class="slide">
            <img src="${slide.url}" alt="${slide.name}">
            <h3>${slide.name}</h3>
        </div>
    `).join('');
    updateSlidePosition();
}

function updateSlidePosition() {
    const slidesContainer = document.getElementById('slides');
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function prevSlide() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slidesData.length - 1;
    updateSlidePosition();
}

function nextSlide() {
    currentIndex = (currentIndex < slidesData.length - 1) ? currentIndex + 1 : 0;
    updateSlidePosition();
}*/






