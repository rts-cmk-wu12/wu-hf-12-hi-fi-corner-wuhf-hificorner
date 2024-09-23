// Hent query parameteren fra URL'en (i dette tilfælde kategorien)
const params = new URLSearchParams(window.location.search);
let category = params.get('category');

// Opdater kategori-navn i HTML'en
document.getElementById('category-name').textContent = category;

const url = (category) => `http://localhost:3000/${category}`;

// Funktion til at hente og vise data
let categoryProducts = [];

async function fetchData() {
    try {
        const response = await fetch(url(category));
        const data = await response.json();
        categoryProducts = Array.isArray(data) ? data : data[category];

        console.log("Modtagne produkter:", categoryProducts);
        displayProducts(categoryProducts);
    } catch (error) {
        console.error('Fejl ved hentning af data:', error);
    }
}

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
        `;
        productContainer.appendChild(productElement);
    });
}

// Filtrer produkter efter maksimal pris
function filterProductsByPrice() {
    const maxPrice = parseFloat(document.getElementById('max-price').value);
    
    if (!isNaN(maxPrice)) {
        const filteredProducts = categoryProducts.filter(product => parseFloat(product.price) <= maxPrice);
        displayProducts(filteredProducts); // Vis de filtrerede produkter
    }
}

// Event listener til kategori links
const categoryLinks = document.querySelectorAll('.category-link');
categoryLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Forhindre standard link-opførsel
        category = link.getAttribute('data-category'); // Hent den valgte kategori
        document.getElementById('category-name').textContent = category; // Opdater kategori-navn
        fetchData(); // Hent data for den valgte kategori
    });
});

// Event listener til filtreringsknap
document.getElementById('filter-price').addEventListener('click', filterProductsByPrice);

// Kald fetchData for at hente data, når siden indlæses
fetchData();






















