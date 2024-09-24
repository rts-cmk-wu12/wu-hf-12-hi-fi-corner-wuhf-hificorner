// Vi henter query parameteren fra URL'en (i vores tilfælde kategorien)
const params = new URLSearchParams(window.location.search);
let category = params.get('category');

// Her opdater kategori-navn i HTML'en
document.getElementById('category-name').textContent = category;

const url = (category) => `http://localhost:3000/${category}`;

// Funktion til at hente og vise dataen
let categoryProducts = [];

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
// Function til at få indholdet placeret
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

  // Tilføj event listener til knapperne
  const viewDetailButtons = document.querySelectorAll('.view-details');
  viewDetailButtons.forEach(button => {
      button.addEventListener('click', () => {
          const productData = JSON.parse(button.getAttribute('data-product'));
          localStorage.setItem('selectedProduct', JSON.stringify(productData));
          window.location.href = 'shop-single-page.html'; // Opdater stien til single page siden
      });
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
        category = link.getAttribute('data-category'); // Henter den valgte kategori
        document.getElementById('category-name').textContent = category; // Opdater kategori-navn
        fetchData(); // Henter data for den valgte kategori
    });
});

// Event listener til filtreringsknap
document.getElementById('filter-price').addEventListener('click', filterProductsByPrice);

// Kald fetchData for at hente data, når siden indlæses
fetchData();






















