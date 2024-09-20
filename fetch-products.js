// Hent query parameteren fra URL'en (i dette tilfælde kategorien)
const params = new URLSearchParams(window.location.search);
const category = params.get('category');

// URL til din JSON-server baseret på kategorien
const url = `http://localhost:3000/${category}`;

// Funktion til at hente og vise data
async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    // Vælg et element i HTML'en hvor du vil vise dataene
    const productContainer = document.getElementById('product-list');

    // Gå gennem hvert produkt og tilføj det til HTML'en
    data.forEach(product => {
      const productElement = document.createElement('div');
      productElement.innerHTML = `
        <h2>${product.name}</h2>
        <p>Pris: ${product.price}</p>
        <p>Producent: ${product.manufacturer}</p>
        <img src="${product.photo}" alt="${product.name}">
      `;
      productContainer.appendChild(productElement);
    });
  } catch (error) {
    console.error('Fejl ved hentning af data:', error);
  }
}

// Kald fetchData funktionen for at hente og vise produkterne
fetchData();








