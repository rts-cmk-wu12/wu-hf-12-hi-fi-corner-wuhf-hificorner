const API_URL = 'http://localhost:3000/';

const response = await fetch(API_URL + 'products');
const productData = await response.json();

console.log(productData);

const productsContainerElement = document.querySelector('#products-main');
const categoryFilterContainerElement = document.querySelector('#products-filter__categories');
const productGridElement = document.querySelector('#product-display__grid');
const productFlexElement = document.querySelector('#product-display__flex');

productGridElement.addEventListener('click', () => {
    productsContainerElement.classList.replace('flex', 'grid')
})

productFlexElement.addEventListener('click', () => {
    productsContainerElement.classList.replace('grid', 'flex')
})

productData.forEach((product) => {
    const productContainer = document.createElement('article');

    productContainer.innerHTML = `
    <img src="${product.image}" alt="${product.category}" class="product__image">
        <div class="product-info">
            <p class="product__name">${product.product_name}</p>
            <p class="product__price">£${product.price}</p>
            <button class="product__button">add to cart</button>
        </div>`
    
    productsContainerElement.appendChild(productContainer);
    productContainer.classList.add('product');
})

function productsCategory() {
    categoryFilterContainerElement.innerHTML = `
    <li>${productData[0].category}
    <li>${productData[4].category}
    <li>${productData[8].category}
    <li>${productData[12].category}
    <li>${productData[16].category}
    <li>${productData[21].category}
    <li>${productData[24].category}
    <li>${productData[29].category}
    `
}
productsCategory()