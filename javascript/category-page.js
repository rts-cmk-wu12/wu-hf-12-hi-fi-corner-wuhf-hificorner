const extraList = document.querySelectorAll(".xtra-list")
const viewAll = document.querySelector(".view-all")

viewAll.addEventListener("click", showHide);
function showHide() {

    let list = this.previousElementSibling;
    console.log(list.style.display)// empty string and none are not equal thing
    if (list.style.display === "" || list.style.display === "none") {
        list.style.display = "block"
        this.textContent = "Short List"
    }
    else {
        list.style.display = "none"
        this.textContent = "View All"
    }
}

// Fetch Data


const response = await fetch('json/items.json');
const product = await response.json();
const productList = document.querySelector('#product-list');
console.log(product);
product.items.forEach(function(product){
    console.log(product.name);
    const productDiv = document.createElement('div');
            productDiv.classList.add('product');

            productDiv.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <p>${product.name}</p>
                 <p>$${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;

            productList.appendChild(productDiv);
})
/*  <p>$${product.price.toFixed(2)}</p>
('json/items.json')
    .then(response => response.json())
    .then(products => {
        const productList = document.getElementById('product-list');

        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');

            productDiv.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <h2>${product.name}</h2>
                <h2>${product.category}</h2>
                <p>$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;

            productList.appendChild(productDiv);
        });
    })
    .catch(error => console.error('Error fetching the products:', error));

function addToCart(productId) {
    fetch('products.json')
        .then(response => response.json())
        .then(products => {
            const product = products.find(p => p.id === productId);
            alert(`${product.name} has been added to your cart!`);
        })
        .catch(error => console.error('Error fetching the products:', error));
}*/
