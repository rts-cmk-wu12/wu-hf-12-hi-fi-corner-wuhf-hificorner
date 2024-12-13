const params = new URLSearchParams(window.location.search);
const chosenCategory = params.get('category');
const chosenProducer = params.get('producer')

const API_URL = 'http://localhost:3000/';
let sort = 'price';
let order = 'asc';
let limit = '34';
let productFilter = 'products/home';

const productsContainerElement = document.querySelector('#products-main');
const categoryFilterContainerElement = document.querySelector('#products-filter__categories');
const priceFilterContainerElement = document.querySelector('#shop-by__price-list');
const producerFilterContainerElement = document.querySelector('#shop-by__producer-list');
const itemsElement = document.querySelector('#products-display__items-text');
const categoryHeading = document.querySelector('#category-heading');
const productNavigationContainerElement = document.querySelector('#products-path');
const priceSorterSelecter = document.querySelector('#products-sorter');
const limiterSelecter = document.querySelector('#products-limiter');
const searchInput = document.querySelector('#product-search-input');

if (chosenCategory) {
    categoryHeading.innerHTML = chosenCategory;
    if (chosenCategory !== 'all') {
        productFilter = `products/category/${chosenCategory}`;
        productNavigationContainerElement.innerHTML = `
        <span class="products-path__link">home</span>
        <span> / </span>
        <span class="products-path__filter">${chosenCategory}</span>`
    }
    fetchProducts()
}

if (chosenProducer) {
    productFilter = `products/producer/${chosenProducer}`;
    fetchProducts()
}

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
    else if (e.target.value == 'Name: A-Z') {
        sort = 'product_name';
        order = 'asc';
        fetchProducts()
    }
    else if (e.target.value == 'Name: Z-A') {
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
    <span class="products-path__link">home</span>
    <span> / </span>
    <span class="products-path__filter">${e.target.innerHTML}</span>`
    fetchProducts()
})

priceFilterContainerElement.addEventListener('click', (e) => {
    const priceElement = e.target.closest('li');
    productFilter = `products/price/lowest/${priceElement.children[0].innerHTML}/highest/${priceElement.lastChild.innerHTML}`;
    categoryHeading.innerHTML = 'all';
    productNavigationContainerElement.innerHTML = `
        <span class="products-path__link">home</span>
        <span> / </span>
        <span class="products-path__filter">${priceElement.innerHTML}</span>`
    fetchProducts()

})

producerFilterContainerElement.addEventListener('click', (e) => {
    productFilter = `products/producer/${e.target.innerHTML}`
    categoryHeading.innerHTML = 'all';
    productNavigationContainerElement.innerHTML = `
    <span class="products-path__link">home</span>
    <span> / </span>
    <span class="products-path__filter">${e.target.innerHTML}</span>`
    fetchProducts()
})

productNavigationContainerElement.addEventListener('click', (e) => {
    if (e.target.innerHTML == 'home') {
        productFilter = 'products/home';
        categoryHeading.innerHTML = 'all';
        productNavigationContainerElement.innerHTML = `
        <span class="products-path__link">home</span>`
        fetchProducts()
    }
})

async function fetchProducts(query = '') {
    const response = await fetch(API_URL + productFilter + `&_sort=${sort}&_order=${order}&_limit=${limit}&q=` + query);
    const productData = await response.json();

    productsContainerElement.textContent = '';
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

    itemsElement.innerHTML = `${productData.length} Item(s)`;
}

searchInput.addEventListener('input', (e) => {
    fetchProducts(e.target.value);
})