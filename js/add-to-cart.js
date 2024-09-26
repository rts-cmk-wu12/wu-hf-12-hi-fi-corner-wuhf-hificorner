const params = new URLSearchParams(window.location.search);
const chosenProduct = params.get('product');

const productInfoCart = document.querySelector('#product-information__cart');
const productInfoBtn = document.querySelector('#product-information__button');
const productInfoPaypalBtn = document.querySelector('#product-information__paypal');
const productInfoQuantity = document.querySelector('#quantity');
const productVariantsContainer = document.querySelector('#product-information__variants');

let productVariant = 'default';

productVariantsContainer.addEventListener('click', (e) => {
    if (e.target.matches("input[type='radio']")) {
        productVariant = e.target.value;;
    }
})

productInfoCart.addEventListener('click', (e) => {
    if (e.target == productInfoBtn || e.target == productInfoPaypalBtn) {
        e.preventDefault()
        const productQty = productInfoQuantity.value;
        console.log(productQty);

        localStorage.setItem(chosenProduct, `${productQty},${productVariant}`);
    }
})

function addProduct(button) {
    const productName = button.previousElementSibling.previousElementSibling.innerHTML;
    localStorage.setItem(productName, productQty);
    console.log(productName);
    console.log(productQty);
}