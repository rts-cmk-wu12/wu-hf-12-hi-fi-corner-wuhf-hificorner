let products = []; // Store fetched products
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
            <a href="product-details.html?product-id=${product.id}"> <img src="${product.img}" alt="${product.name}"></a>  
             <a class="product-links" href="product-details.html?product-id=${product.id}"><h2>${product.name}</h2></a>
            <p class="price">${product.Price}</p>
            <button class="shopnow-button">Add to cart</button>
        `;
        productsDiv.appendChild(productDiv);
    });
}

function updateItemCount(count) {
    document.getElementById('itemCount').innerText = `${count} Item(s)`;
}
const sort = document.querySelector('#sort')
sort.addEventListener('change', (event) => {

    console.log(products);
    
    const sortBy = event.target.value;
    if (sortBy === 'asc') {
        products.sort((a, b) => a.Price - b.Price);
    } else if (sortBy === 'desc') {
        products.sort((a, b) => b.Price - a.Price);
    }
    displayProducts(products);
});
fetchProducts();
