const API_URL = 'http://localhost:3000/';

const response = await fetch(API_URL + 'products');
const productData = await response.json();

console.log(productData);
console.log(productData.length);