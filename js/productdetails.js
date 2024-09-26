const API_URL = 'http://localhost:3000/'; /*----Husk at slå autosave fra når i arbejder med JSON----*/
const params = new URLSearchParams(window.location.search)

const productNames = params.get('product-name');
const response = await fetch(API_URL + 'products/?=product-name=' + productNames);
const product = (await response.json())[0];

const PRODUCT_ID_DATA = product.id;


const nameElement = document.querySelectorAll('.product-title');
const brandNameElement = document.querySelectorAll('.brandname');
const detailsElement = document.querySelector('.getdetails');

console.log(brandNameElement);

nameElement.forEach(names => {
    names.innerText = product.name;
});

brandNameElement.forEach(element => {
    element.innerText = product.brandname;
});

detailsElement.innerHTML = product.description;
