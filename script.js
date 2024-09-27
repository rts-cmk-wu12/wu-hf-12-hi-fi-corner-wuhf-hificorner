// script.js

// Function to fetch product data from the API
async function fetchProducts() {
    try {
        const response = await fetch('http://localhost:3000/products');
        
        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const products = await response.json(); // Parse the JSON data
        displayProducts(products); // Call function to display products
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Function to display products on the page
function displayProducts(products) {
    const productDisplay = document.getElementById('product-display');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: ${product.Price}</p>
            <button>Add to Cart</button>
        `;
        productDisplay.appendChild(productCard);
    });
}

// Call the fetchProducts function when the window loads
window.onload = fetchProducts;
