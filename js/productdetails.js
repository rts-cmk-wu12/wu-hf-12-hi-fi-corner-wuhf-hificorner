const API_URL = 'http://localhost:3000/'; /*----Husk at slå autosave fra når i arbejder med JSON----*/
const params = new URLSearchParams(window.location.search)

const productNames = params.get('product-id');
const response = await fetch(API_URL + 'products/' + productNames);
const product = await response.json();

const PRODUCT_ID_DATA = product.id;


const nameElement = document.querySelectorAll('.product-title');
const brandNameElement = document.querySelectorAll('.brandname');
const detailsElement = document.querySelector('.getdetails');
const imageElement = document.querySelector('.img-swap')
const priceElement = document.querySelector('.detail-price')
const discountElement = document.querySelector('.discount-price')
const optionsElement = document.querySelector('.options-container')

const options = product.options !== undefined ? Object.keys(product.options) : [];

/* if (product.options !== null) {
    options = Object.keys(product.options)
} else {
    options = [];
}
 */


console.log(options)

console.log(imageElement);

imageElement.src = product.img;

priceElement.innerHTML = product.Price

nameElement.forEach( names => names.innerText = product.name);

brandNameElement.forEach(brand => brand.innerText = product.brandname);

detailsElement.innerHTML = product.description;



options.forEach(option => {

    const labelElement = document.createElement('label');
    const inputElement = document.createElement('input');

    inputElement.type = 'radio';
    imageElement.name = 'color';
    labelElement.classList.add('option-styling')

    labelElement.textContent = option;

    inputElement.addEventListener('change', () => window.location.href = "product-details.html?product-id=" + product.options[option])

    labelElement.append(inputElement);
    optionsElement.append(labelElement);
});