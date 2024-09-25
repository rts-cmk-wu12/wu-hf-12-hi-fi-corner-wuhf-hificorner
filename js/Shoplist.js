
const API_URL = 'http://localhost:3000/'; /*----Husk at slå autosave fra når i arbejder med JSON----*/
const IMAGE_URL = '';

async function fetchProducts() {
    try {
        const response = await fetch('http://localhost:3000/products');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function displayProducts(products) {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <a href="product-details.html"> <img src="${product.img}" alt="${product.name}"></a>  
            <h2>${product.name}</h2>
            <p class="price">Price: ${product.Price}</p>
            <button class="shopnow-button">Add to cart</button>
        `;
        productsDiv.appendChild(productDiv);
    });
}

fetchProducts();