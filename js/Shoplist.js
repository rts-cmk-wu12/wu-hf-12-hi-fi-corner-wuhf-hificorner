const API_URL = 'http://localhost:3000/'; /*----Husk at slå autosave fra når i arbejder med JSON----*/
const IMAGE_URL = '';

const response = await fetch(API_URL + '');
const data = await response.json();

const bodyElement = document.body;
const mainElement = document.querySelector('');
const listElement = document.querySelector('');

const productArray = data.results;
const productName = data.results[0].name;