const extraList = document.querySelectorAll(".xtra-list")
const viewAll = document.querySelector(".view-all")

viewAll.addEventListener("click", showHide);
function showHide() {

    let list = this.previousElementSibling;
    console.log(list.style.display)// empty string and none are not equal thing
    if (list.style.display === "" || list.style.display === "none") {
        list.style.display = "block"
        this.textContent = "Short List"
    }
    else {
        list.style.display = "none"
        this.textContent = "View All"
    }
}
// Fetch Data

const API_URL = "http://localhost:3000/";
const response = await fetch(API_URL + 'items');
const product = await response.json();
const productList = document.querySelector('#product-list');
console.log(product);
/*product.forEach(function(product){
    console.log(product.name);
    const productDiv = document.createElement('div');
            productDiv.classList.add('product');

            productDiv.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <p>${product.name}</p>
                 <p>$${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;

            productList.appendChild(productDiv);
})*/
//////////
function displayProducts(product) {
    productList.innerHTML = ''; // Clear the current list
    product.forEach(function (product) {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <p>${product.name}</p>
            <p>$${product.price}</p>
         <button>Add to Cart</button>
        `;
        productDiv.addEventListener("click", productDetail);
        function productDetail() {
            window.location.assign(`/single-produkt.html?name=${product.name}`)
        };
        productList.appendChild(productDiv);

        //<button onclick="addToCart(${product.id})">Add to Cart</button>
    });
}

const categories = Array.from(document.querySelectorAll(".category-page__left_ul_li"));
categories.forEach(category => category.addEventListener("click", showItems));

/*categories.forEach(function(category) {
    category.addEventListener("click",showItems )
});

document.querySelector("#cd_players").addEventListener("click",showItems );
document.querySelector("#dvd_players").addEventListener("click",showItems );
document.querySelector("#power_amplifiers").addEventListener("click",showItems );
document.querySelector("#preamplifiers").addEventListener("click",showItems );
document.querySelector("#speakers").addEventListener("click",showItems );
document.querySelector("#turntables").addEventListener("click",showItems );
document.querySelector("#record_players").addEventListener("click",showItems );
document.querySelector("#router_amplifier").addEventListener("click",showItems );*/

function showItems() {
    const categoryName = this.textContent;
    const filteredProducts = product.filter(product =>
        product.category.slice(0, 2) === categoryName.slice(0, 2));
    displayProducts(filteredProducts);
    //console.log("filter", filteredProducts);
}
displayProducts(product);
