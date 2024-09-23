const params = new URLSearchParams(window.location.search);
const selectedProduct = params.get('name');



fetch('db.json')
.then(function(response){
    return response.json();
})
.then(function(productData){
    console.log(productData.items);
    const productArray = productData.items;
    productArray.forEach(function(product, index){
        if(productData.items[index].name == selectedProduct){





/*             const productContainer = document.createElement('div');
            productContainer.innerhtml = 
            ``

            const mainWrapper = document.querySelector('#single-produkt-main');
            mainWrapper.appendChild(productContainer);
            productContainer.classList.add('main__wrapper') */
        }
    })
})