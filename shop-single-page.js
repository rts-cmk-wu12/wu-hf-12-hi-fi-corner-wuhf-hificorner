
    // Hent produktdata fra localStorage
    const productData = JSON.parse(localStorage.getItem('selectedProduct'));

    // Find HTML-elementer, hvor dataene skal vises
    const imagePreview = document.getElementById('shop-single-page-wrapper-left-image-preview-image');
    const productName = document.querySelector('#shop-single-page-wrapper-right h1');
    const productPrice = document.querySelector('#shop-single-page-wrapper-right-price h3');

    if (productData) {
        // Opdater elementerne med produktdata
        imagePreview.src = productData.photo;
        imagePreview.alt = productData.name;
        productName.textContent = productData.name;
        productPrice.textContent = `${productData.price} DKK`;
      
    } 

