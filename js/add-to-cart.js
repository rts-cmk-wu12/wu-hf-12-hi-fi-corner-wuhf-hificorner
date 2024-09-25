const params = new URLSearchParams(window.location.search);
const chosenProduct = params.get('product');

const productInfoCart = document.querySelector('#product-information__cart');
const productInfoBtn = document.querySelector('#product-information__button');
const productInfoPaypalBtn = document.querySelector('#product-information__paypal');
const productInfoQuantity = document.querySelector('#quantity');

let productQty = 1;

productInfoCart.addEventListener('click', (e) => {
    if (e.target == productInfoBtn || e.target == productInfoPaypalBtn) {
        if (productInfoQuantity.value >= 1) {
            productQty = productInfoQuantity.value;
            console.log(productQty);
        }

        localStorage.setItem(chosenProduct, productQty);
    }
})

function addProduct(button) {
    const productName = button.previousElementSibling.previousElementSibling.innerHTML;
    localStorage.setItem(productName, productQty);
    console.log(productName);
    console.log(productQty);
}

document.querySelector('#form').addEventListener('click', (e) => {
    e.preventDefault()
})