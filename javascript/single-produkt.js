const params = new URLSearchParams(window.location.search);
const selectedProduct = params.get('name');

const productCategoryLocation = document.querySelector('#product-category-location');
const productImage = document.querySelector('#image-product');
const productName = document.querySelector('#product-name');
const productBrand = document.querySelector('#product-brand');
const productPrice = document.querySelector('#product-price');
const productDescription = document.querySelector('#product-description');
const productManufacturer = document.querySelector('#table_td-manufacture')
const productManufacturerLink = document.querySelector('#table_td-manufacture-link')

fetch('db.json')
.then(function(response){
    return response.json();
})
.then(function(productData){
    console.log(productData.items);
    const productArray = productData.items;
    productArray.forEach(function(product, index){
        if(productData.items[index].name == selectedProduct){
            productCategoryLocation.innerHTML = ` home <span class="color-black">/</span> ${productArray[index].category} <span class="color-black">/ ${productArray[index].name}</span>`;
            productImage.innerHTML = `<img src="${productArray[index].img}" alt="product" class="single__produkt-left__container-image-product">`;
            productName.innerHTML = `${productArray[index].name}`;
            productBrand.innerHTML = `See other ${productArray[index].brand} products`
            productPrice.innerHTML = `${productArray[index].price}`;
            productDescription.innerHTML = `${productArray[index].description}`;

            productManufacturer.innerHTML = ` ${productArray[index].brand}`;
            productManufacturerLink.innerHTML = `<a href=""> ${productArray[index].brand} </a>`;
            if(product.variants){
                product.variants.forEach(function(variant){
                    const variantImage = document. createElement('img');
                    variantImage.src=variant.img 
                    variantImage.alt=variant.color
                    
                    const images = document.querySelector('#container-images');
                    images.appendChild(variantImage)
                    variantImage.classList.add('variant-images')
                })


            }
        }

    })
})