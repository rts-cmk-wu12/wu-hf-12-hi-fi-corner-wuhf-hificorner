
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

        // Hvis du har flere billeder, kan du tilføje dem her
        const moreViewsContainer = document.getElementById('shop-single-page-wrapper-left-image-preview');
        productData.moreViews.forEach(view => {
            const img = document.createElement('img');
            img.src = view;
            img.alt = `${productData.name} view`;
            moreViewsContainer.appendChild(img);
        });
    } else {
        // Hvis der ikke er produktdata, vis en fejlmeddelelse
        console.error('Ingen produktdata fundet.');
    }

