const API_URL = 'http://localhost:3000/'; /*----Husk at slå autosave fra når i arbejder med JSON----*/
const params = new URLSearchParams(window.location.search)

const productNames = params.get('product-id');
const response = await fetch(API_URL + 'products/' + productNames);
const product = await response.json();

const PRODUCT_ID_DATA = product.id;


const nameElement = document.querySelectorAll('.product-title');
const brandNameElement = document.querySelectorAll('.brandname');
const detailsElement = document.querySelector('.getdetails');
const imageElement = document.querySelector('.img')

console.log(product);

nameElement.forEach( names => names.innerText = product.name);

brandNameElement.forEach(brand => brand.innerText = product.brandname);

detailsElement.innerHTML = product.description;