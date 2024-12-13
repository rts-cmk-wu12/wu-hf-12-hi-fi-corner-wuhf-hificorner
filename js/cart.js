const API_URL = 'http://localhost:3000/';

const productsContainerElement = document.querySelector('#products-main');
const checkoutTotalPriceElement = document.querySelector('#cart-information__total-price');

const response = await fetch(API_URL + 'products');
const productData = await response.json();

productData.forEach((product) => {
    for (var i = 0; i < localStorage.length; i++) {
        if (product.product_name === String(localStorage.key(i))) {
            const productContainer = document.createElement('article');
            const productInfo = localStorage.getItem(localStorage.key(i)).split(',');
            const quantity = productInfo[0];
            const version = productInfo[1];
            let productImage = product.image;
            let productName = product.product_name;

            if (version !== 'default') {
                const variantIndex = product.variant.findIndex((variant) => variant.colour == version);
                productImage = product.variant[variantIndex].image;
                productName = `${product.product_name}: ${version}`;
            }

            productContainer.innerHTML = `
            <img src="${productImage}" alt="${product.category}" class="product__image">
            <div class="product-info">
            <div class="product-cart-top-details">
            <a href="details.html?product=${product.product_name}" class="product__name">${productName}</a>
            <img src="/Icons/trash-icon.svg" alt="trash" class="remove-product">
            </div>
            <div class="product-cart-details">
                    <p class="product__price">£${product.price}</p>
                    <p class="product__quantity">Qty: ${quantity}</p>
                </div>
            </div>`

            productsContainerElement.appendChild(productContainer);
            productContainer.classList.add('product');

            let totalPrice = Number(checkoutTotalPriceElement.innerHTML);
            totalPrice = totalPrice + product.price * quantity;
            checkoutTotalPriceElement.innerHTML = totalPrice;

            productContainer.addEventListener('click', (e) => {
                if (e.target.classList.contains('remove-product')) {
                    localStorage.removeItem(e.target.previousElementSibling.innerHTML);
                    location.reload();
                }
            })
        }
    }
})