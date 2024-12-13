let slideIndex = 0;

fetch('db.json')

    .then(response => response.json())
    .then(data => {

        const slidesContainer = document.getElementById('slides');
        data.products.forEach(product => {
            const slide = document.createElement('div');
            slide.classList.add('slide');

            const img = document.createElement('img');
            img.src = product.image;

            const productName = document.createElement('div');
            productName.classList.add('product_name');
            productName.innerHTML = "<br /><h3>"+ product.product_name+"</h3>";

            slide.appendChild(img);
            slide.appendChild(productName);
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