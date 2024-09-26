// Hent produktdata fra localStorage
const productData = JSON.parse(localStorage.getItem('selectedProduct'));

// Find HTML-elementer til at vise produktdata
const imagePreview = document.getElementById('shop-single-page-wrapper-left-image-preview-image');
const productName = document.querySelector('#shop-single-page-wrapper-right h1');
const productPrice = document.querySelector('#shop-single-page-wrapper-right-price h3');

// Opdater elementerne med produktdata
if (productData) {
    imagePreview.src = productData.photo;
    imagePreview.alt = productData.name;
    productName.textContent = productData.name;
    productPrice.textContent = `${productData.price} DKK`;
}

// Event listener til 'Add to Cart'-knappen
const addToCartButton = document.getElementById('shop-single-page-wrapper-right-add-to-cart-quantity-paypal-add-to-cart');
addToCartButton.addEventListener('click', () => {
    const selectedProduct = {
        name: productData.name,
        price: productData.price,
        photo: productData.photo
    };
    localStorage.setItem('cartProduct', JSON.stringify(selectedProduct));
    window.location.href = 'hifi-cart.html';
});




