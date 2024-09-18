const params = new URLSearchParams(window.location.search);
const chosenProduct = params.get('product');

const API_URL = 'http://localhost:3000/';

const response = await fetch(API_URL + 'products');
const productData = await response.json();

const productNavigationContainerElement = document.querySelector('#products-path');

productData.forEach((product) => {
    if (product.product_name == chosenProduct) {
        console.log(product);
        productNavigationContainerElement.innerHTML = `
        <span class="products-path__link">home</span>
        <span> / </span>
        <span class="products-path__filter products-path__link">${product.category}</span>
        <span> / </span>
        <span class="products-path__filter">${product.product_name}</span>`

        productNavigationContainerElement.addEventListener('click', (e) => {
            if (e.target.innerHTML == 'home') {
                location.assign('shoplist.html')
            }
            else if (e.target.innerHTML == product.category) {
                location.assign(`shoplist.html?category=${e.target.innerHTML}`)
            }
        })
    }
})
