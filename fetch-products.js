// Hent query parameteren fra URL'en (i dette tilfælde kategorien)
const params = new URLSearchParams(window.location.search);
const category = params.get('category');

// Opdater kategori-navn i HTML'en
document.getElementById('category-name').textContent = category;

// URL til din JSON-server baseret på kategorien
const url = `http://localhost:3000/${category}`;



// Funktion til at hente og vise data
async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    // Tjek om data er et array eller et objekt
    let categoryProducts = Array.isArray(data) ? data : data[category];

    console.log("Modtagne produkter:", categoryProducts);

    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = '';

    // Gå gennem hvert produkt og tilføj det til HTML'en
    categoryProducts.forEach(product => {
      const productElement = document.createElement('div');
      productElement.innerHTML = `
       <img src="${product.photo}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>Pris: ${product.price}</p>
        <p>Producent: ${product.manufacturer}</p>
      `;
      productContainer.appendChild(productElement);
    });
  } catch (error) {
    console.error('Fejl ved hentning af data:', error);
  }
}

// Kald fetchData for at hente data, når siden indlæses
fetchData();


















