const params = new URLSearchParams( window.location.search );

const productname = params.get("name");

const response = await fetch('db.json');
const data = await response.json();

function getProductByName (name, products) {
    return products.find(product => product['name'] == name );
}

const product = getProductByName(productname, data.products);

console.log(product)

function setTextContentByElementId (elementId, TextContent) {
    const elementInHTML = document.getElementById(elementId);

    elementInHTML.textContent = TextContent;
}

function setInnerHTMLByElementId (elementId, innerHTML) {
    const elementInHTML = document.getElementById(elementId);

    elementInHTML.innerHTML = innerHTML;
}

setInnerHTMLByElementId(
    'image',
    `<img src=${product['image']}>`
);

setTextContentByElementId('name', product['name']);
setTextContentByElementId('price', product['price']);
setTextContentByElementId('category', product['category']);
setTextContentByElementId('description', product['description']);
setTextContentByElementId('company', product['company']);
