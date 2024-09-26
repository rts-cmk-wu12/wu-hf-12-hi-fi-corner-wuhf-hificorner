const API_URL = 'http://localhost:3000/';

const response = await fetch(API_URL + 'products?_sort=price');
const productData = await response.json();

console.log(productData);

const productsContainerElement = document.querySelector('#products-main');
const categoryFilterContainerElement = document.querySelector('#products-filter__categories');
const producerFilterContainerElement = document.querySelector('#shop-by__producer-list');
const producerContainerElement = document.querySelector('#products-producer__list');
const productGridElement = document.querySelector('#product-display__grid');
const productFlexElement = document.querySelector('#product-display__flex');
const itemsElement = document.querySelector('#products-display__items-text');

productGridElement.addEventListener('click', () => {
    productsContainerElement.classList.replace('flex', 'grid');
})

productFlexElement.addEventListener('click', () => {
    productsContainerElement.classList.replace('grid', 'flex');
})

itemsElement.innerHTML = `${productData.length} Item(s)`;

productData.forEach((product) => {
    const productContainer = document.createElement('article');

    productContainer.innerHTML = `
    <img src="${product.image}" alt="${product.category}" class="product__image">
        <div class="product-info">
            <a href="details.html?product=${product.product_name}" class="product__name">${product.product_name}</a>
            <p class="product__price">£${product.price}</p>
            <button onclick="addProduct(this)" class="product__button">add to cart</button>
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
    producerFilterContainerElement.innerHTML = uniqueProducers.map(producer => `<li class="filter-item">${producer}</li>`).join('');
    producerContainerElement.innerHTML = limitedProducers.map(producer => `<li class="products-producer__list-item">${producer}</li>`).join('');
}

displayLists();

viewAllProducersBtn.addEventListener('click', () => {
        producerContainerElement.innerHTML = uniqueProducers.map(producer => `<li class="products-producer__list-item">${producer}</li>`).join('');
        viewAllProducersBtn.style.display="none";
        productsProducersElement.appendChild(viewLessProducersBtn);
        viewLessProducersBtn.innerHTML = 'View less';
        viewLessProducersBtn.classList.add('products-producer__button');
        viewLessProducersBtn.style.display="block";
})

viewLessProducersBtn.addEventListener('click', () => {
    displayLists()
    viewAllProducersBtn.style.display="block";
    viewLessProducersBtn.style.display="none";
})