
// Retrieve and parse the stored cart items from local storage
const storedCartItems = localStorage.getItem("cartItems");

// Check if the storedCartItems is not null (i.e., there is data in localStorage)
if (storedCartItems) {
    // Parse the JSON string into an array
    const productArray = JSON.parse(storedCartItems);
      
    productArray.forEach(function(product, index){
        const itemContainer = document.createElement('div');
        itemContainer.innerHTML = `
            <div class="cart__container-items__list-product__container">
                <img src="${product.img}" alt="product">
                <p>${product.name}</p>
            </div>
            <div class="cart__container-items__list-price__wrapper">
                <p class="cart__container-items__list-price">${product.price}</p>
            </div>
            `;
        const itemWrapper = document.querySelector('#items__container');
        itemWrapper.appendChild(itemContainer);
        itemContainer.classList.add('cart__container-items__list-container');
        

        /* Total price */
        const totalPriceElement = document.querySelector('#total__price');
        const totalPriceNumber = Number(product.price.slice(1)); //Make product.price string to number
        let totalPrice =  Number(totalPriceElement.innerHTML); //totalPrice = nul as deafault
        totalPrice = totalPrice + totalPriceNumber; //Adds the total price
     
        console.log(totalPrice);
        totalPriceElement.innerHTML = `${totalPrice}`; 
    });
    
    
};

