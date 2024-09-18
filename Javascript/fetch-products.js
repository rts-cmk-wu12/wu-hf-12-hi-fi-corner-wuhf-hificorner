document.addEventListener('DOMContentLoaded', () => {
    // Hent URL-parametre
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    
    // Kontroller, om der er en kategori parameter
    if (category) {
        // Fetch data fra JSON Server
        fetch(`http://localhost:3000/products?category=${category}`)
            .then(response => response.json())
            .then(data => {
                displayProducts(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    } else {
        // Ingen kategori valgt
        document.querySelector('main').innerHTML = '<p>No category selected.</p>';
    }
});

function displayProducts(products) {
    const mainElement = document.querySelector('main');
    if (products.length === 0) {
        mainElement.innerHTML = '<p>No products found in this category.</p>';
        return;
    }

    // Generer HTML for hver produkt
    const productsHtml = products.map(product => `
        <section class="product">
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
        </section>
    `).join('');
    
    mainElement.innerHTML = `<div class="products">${productsHtml}</div>`;
}








