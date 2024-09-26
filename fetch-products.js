// Henter query parameteren 'category' fra URL'en
const params = new URLSearchParams(window.location.search);
let category = params.get('category');

// Opdaterer kategori-navnet i HTML'en
document.getElementById('category-name').textContent = category;

// Dynamisk URL til at hente data
const url = (category) => `http://localhost:3000/${category}`;

// Liste til at gemme produkter for den valgte kategori
let categoryProducts = [];

// Asynkron funktion til at hente data
async function fetchData() {
    try {
        const response = await fetch(url(category));
        const data = await response.json();
        categoryProducts = Array.isArray(data) ? data : data[category];
        displayProducts(categoryProducts);
    } catch (error) {
        console.error('Fejl ved hentning af data:', error);
    }
}

// Funktion til at vise produkter i HTML'en
function displayProducts(products) {
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `
            <img src="${product.photo}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Pris: ${product.price} DKK</p>
            <p>Producent: ${product.manufacturer}</p>
            <button class="view-details" data-product='${JSON.stringify(product)}'>Se detaljer</button>
        `;
        productContainer.appendChild(productElement);
    });

    // Tilføj event listeners til "Se detaljer"-knapperne
    addDetailButtonListeners();
}

// Funktion til at tilføje event listeners til detalje-knapperne
function addDetailButtonListeners() {
    const viewDetailButtons = document.querySelectorAll('.view-details');
    viewDetailButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productData = JSON.parse(button.getAttribute('data-product'));
            localStorage.setItem('selectedProduct', JSON.stringify(productData));
            window.location.href = 'shop-single-page.html';
        });
    });
}

// Filtreringsfunktion
function filterProductsByPrice() {
    const maxPrice = parseFloat(document.getElementById('max-price').value);
    if (!isNaN(maxPrice)) {
        const filteredProducts = categoryProducts.filter(product => parseFloat(product.price) <= maxPrice);
        displayProducts(filteredProducts);
    }
}

// Event listeners til kategori-links
const categoryLinks = document.querySelectorAll('.category-link');
categoryLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        category = link.getAttribute('data-category');
        document.getElementById('category-name').textContent = category;
        fetchData();
    });
});

// Event listener til filtreringsknappen
document.getElementById('filter-price').addEventListener('click', filterProductsByPrice);

// Fetch data ved indlæsning af siden
fetchData();























