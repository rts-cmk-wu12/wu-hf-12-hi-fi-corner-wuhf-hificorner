const singleProductContainer = document.querySelector('.single-product-container');
const API_URL = 'http://localhost:3000/';

const response = await fetch(API_URL + 'products');
const productData = await response.json();

console.log(productData)


productData.forEach(products => {
    singleProductContainer.innerHTML += 
    `
    <tr>
    <td> ${products.name} </td> 
    <td> ${produtcs.description} </td>
    <td> ${videogame.genre} </td>
    <td> ${videogame.price} </td>
    </tr>
    `;
});
