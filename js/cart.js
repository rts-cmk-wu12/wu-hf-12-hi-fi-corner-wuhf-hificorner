const API_URL = 'http://localhost:3000/';

const productsContainerElement = document.querySelector('#products-main');
const checkoutTotalPriceElement = document.querySelector('#cart-information__total-price')

const response = await fetch(API_URL + 'products');
const productData = await response.json();

productData.forEach((product) => {
    for (var i = 0; i < localStorage.length; i++) {
        if (product.product_name === String(localStorage.key(i))) {
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

            let totalPrice = Number(checkoutTotalPriceElement.innerHTML);
            totalPrice = totalPrice + product.price;
            checkoutTotalPriceElement.innerHTML = totalPrice;
        }
    }
})