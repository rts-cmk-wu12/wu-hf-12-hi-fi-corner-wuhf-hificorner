const API_URL = 'http://localhost:3000/';

const response = await fetch(API_URL + 'products');
const productData = await response.json();

console.log(productData);

const productsContainerElement = document.querySelector('#products-main');
const categoryFilterContainerElement = document.querySelector('#products-filter__categories');
const ProducerFilterContainerElement = document.querySelector('#shop-by__producer-list');
const ProducerContainerElement = document.querySelector('#products-producer__list');
const productGridElement = document.querySelector('#product-display__grid');
const productFlexElement = document.querySelector('#product-display__flex');
const itemsElement = document.querySelector('#products-display__items-text')

productGridElement.addEventListener('click', () => {
    productsContainerElement.classList.replace('flex', 'grid')
})

productFlexElement.addEventListener('click', () => {
    productsContainerElement.classList.replace('grid', 'flex')
})

itemsElement.innerHTML = `${productData.length} Item(s)`

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

const uniqueCategories = [...new Set(productData.map(product => product.category))];
const uniqueProducers = [...new Set(productData.map(product => product.producer))];
const limitedProducers = uniqueProducers.slice(0, 10);
const productsProducersElement = document.querySelector('#products-producer');
const viewAllProducersBtn = document.querySelector('#products-producer__button');
const viewLessProducersBtn = document.createElement('button');

function displayLists() {
    categoryFilterContainerElement.innerHTML = uniqueCategories.map(category => `<li class="filter-item">${category}</li>`).join('');
    ProducerFilterContainerElement.innerHTML = uniqueProducers.map(producer => `<li class="filter-item">${producer}</li>`).join('');
    ProducerContainerElement.innerHTML = limitedProducers.map(producer => `<li class="filter-item products-producer__list-item">${producer}</li>`).join('');
}

displayLists();

viewAllProducersBtn.addEventListener('click', () => {
        ProducerContainerElement.innerHTML = uniqueProducers.map(producer => `<li class="filter-item products-producer__list-item">${producer}</li>`).join('');
        viewAllProducersBtn.style.display="none"
        productsProducersElement.appendChild(viewLessProducersBtn)
        viewLessProducersBtn.innerHTML = 'View less'
        viewLessProducersBtn.classList.add('products-producer__button')
})

viewLessProducersBtn.addEventListener('click', () => {
    displayLists()
    viewAllProducersBtn.style.display="block"
    viewLessProducersBtn.style.display="none"
})