let products = []; // Store fetched products

const API_URL = 'http://localhost:3000/'; /*----Husk at slå autosave fra når i arbejder med JSON----*/
const IMAGE_URL = '';

async function fetchProducts() {
    try {
        const response = await fetch('http://localhost:3000/products');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        products = await response.json();
        displayProducts(products);
        updateItemCount(products.length); // Update item count
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
            <img src="${product.img}" alt="${product.name}">
            <h2>${product.name}</h2>

            <p class="price">${product.Price}</p>

        `;
        productsDiv.appendChild(productDiv);
    });
}

// function updateItemCount(count) {
//     document.getElementById('itemCount').innerText = `${count} Item(s)`;
// }
// const sort = document.querySelector('sort')
// sort.addEventListener('change', (event) => {
//     const sortBy = event.target.value;
//     if (sortBy === 'asc') {
//         products.sort((a, b) => a.price - b.price);
//     } else if (sortBy === 'desc') {
//         products.sort((a, b) => b.price - a.price);
//     }
//     displayProducts(products);
// });


fetchProducts();
