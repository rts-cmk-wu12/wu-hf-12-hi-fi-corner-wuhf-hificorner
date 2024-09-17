const API_URL = 'http://localhost:3000/';
let productFilter = 'products/home';

const productsContainerElement = document.querySelector('#products-main');
const categoryFilterContainerElement = document.querySelector('#products-filter__categories');
const priceFilterContainerElement = document.querySelector('#shop-by__price-list');
const ProducerFilterContainerElement = document.querySelector('#shop-by__producer-list');
const itemsElement = document.querySelector('#products-display__items-text');
const categoryHeading = document.querySelector('#category-heading');
const productNavigationContainerElement = document.querySelector('#products-path');
const priceSorterSelecter = document.querySelector('#products-sorter');
const limiterSelecter = document.querySelector('#products-limiter');

let sort = 'price';
let order = 'asc';
let limit = '34';
priceSorterSelecter.addEventListener('change', (e) => {
    if (e.target.value == 'Price: Ascending') {
        sort = 'price';
        order = 'asc';
        fetchProducts()
    }
    else if (e.target.value == 'Price: Descending') {
        sort = 'price';
        order = 'desc';
        fetchProducts()
    }
    else if (e.target.value == 'Name: Ascending') {
        sort = 'product_name';
        order = 'asc';
        fetchProducts()
    }
    else if (e.target.value == 'Name: Descending') {
        sort = 'product_name';
        order = 'desc';
        fetchProducts()
    }
})

limiterSelecter.addEventListener('change', (e) => {
    limit = e.target.value;
    fetchProducts()
})



categoryFilterContainerElement.addEventListener('click', (e) => {
    productFilter = `products/category/${e.target.innerHTML}`
    categoryHeading.innerHTML = e.target.innerHTML;
    productNavigationContainerElement.innerHTML = `
    <span class="products-path__home">home</span>
    <span> / </span>
    <span class="products-path__filter">${e.target.innerHTML}</span>`
    fetchProducts()
})

priceFilterContainerElement.addEventListener('click', (e) => {
    productFilter = `products/price/lowest/${e.target.children[0].innerHTML}/highest/${e.target.lastChild.innerHTML}`
    categoryHeading.innerHTML = 'all';
    productNavigationContainerElement.innerHTML = `
    <span class="products-path__home">home</span>
    <span> / </span>
    <span class="products-path__filter">${e.target.innerHTML}</span>`
    fetchProducts()
})

ProducerFilterContainerElement.addEventListener('click', (e) => {
    productFilter = `products/producer/${e.target.innerHTML}`
    categoryHeading.innerHTML = 'all';
    productNavigationContainerElement.innerHTML = `
    <span class="products-path__home">home</span>
    <span> / </span>
    <span class="products-path__filter">${e.target.innerHTML}</span>`
    fetchProducts()
})

productNavigationContainerElement.addEventListener('click', (e) => {
    if (e.target.innerHTML == 'home') {
        productFilter = 'products/home'
        categoryHeading.innerHTML = 'all';
        productNavigationContainerElement.innerHTML = `
        <span class="products-path__home">home</span>`
        fetchProducts()
    }
})

async function fetchProducts() {
    const response = await fetch(API_URL + productFilter + `&_sort=${sort}&_order=${order}&_limit=${limit}`);
    const productData = await response.json();


    productsContainerElement.textContent = '';
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

    itemsElement.innerHTML = `${productData.length} Item(s)`
}