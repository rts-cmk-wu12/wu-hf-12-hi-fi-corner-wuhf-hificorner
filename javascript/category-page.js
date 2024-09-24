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
//console.log(product);

function displayProducts(product) {
    productList.innerHTML = ''; // Clear the current list
    product.forEach(function (product) {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <p>${product.name}</p>
            <p>${product.price}</p>
            <button>Add to Cart</button>
        `;
        productDiv.addEventListener("click", productDetail);
        function productDetail() {
            window.location.assign(`/single-produkt.html?name=${product.name}`)
        };
        productList.appendChild(productDiv);
    });
}
// Function to sort products
function sortProducts(product, criteria) {
    let sortedProducts = [...product];
    if (criteria === 'lowest_price') {
        sortedProducts.sort((a, b) => a.price.slice(1) - b.price.slice(1)); // Ascending order
    } else if (criteria === 'highest_price') {
        sortedProducts.sort((a, b) => b.price.slice(1) - a.price.slice(1)); // Descending order
    } else if (criteria === 'name') {
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    }
    return sortedProducts;
}

// Function to filter products by price range
function filterProductsByPrice(product, minPrice, maxPrice) {
    return product.filter(product => product.price.slice(1) >= minPrice && product.price.slice(1) <= maxPrice);
}

// Event listener for the dropdown change (product count)
document.getElementById('product-count').addEventListener('change', function () {
    const selectedCount = parseInt(this.value);
    const sortCriteria = document.getElementById('sort-options').value;
    const sortedProducts = sortProducts(product, sortCriteria);
    displayProducts(sortedProducts.slice(0, selectedCount));
});

// Event listener for the dropdown change (sort options)
document.getElementById('sort-options').addEventListener('change', function () {
    const sortCriteria = this.value;
    const selectedCount = parseInt(document.getElementById('product-count').value);
    const sortedProducts = sortProducts(product, sortCriteria);
    displayProducts(sortedProducts.slice(0, selectedCount));
});

// Event listener for the price range selection
document.querySelectorAll('.category-page__left__li-shop_by-price').forEach(function (priceRange) {
    priceRange.addEventListener('click', function () {
        const minPrice = parseFloat(this.getAttribute('data-min'));
        //console.log("----",minPrice);

        const maxPrice = parseFloat(this.getAttribute('data-max'));
        const filteredProducts = filterProductsByPrice(product, minPrice, maxPrice);
        console.log("...", filteredProducts);

        const sortCriteria = document.getElementById('sort-options').value;
        const sortedProducts = sortProducts(filteredProducts, sortCriteria);
        const selectedCount = parseInt(document.getElementById('product-count').value);
        displayProducts(sortedProducts.slice(0, selectedCount));
        displayProducts(filteredProducts);
    });
});

// Initial display of 20 products
displayProducts(product.slice(0, 20));



const categories = Array.from(document.querySelectorAll(".category-page__left_ul_li"));
categories.forEach(category => category.addEventListener("click", showItems));
/*categories.forEach(function(category) {
    category.addEventListener("click",showItems )
});*/

function showItems() {
    const categoryName = this.textContent;
    const filteredProducts = product.filter(product =>
        product.category.slice(0, 2) === categoryName.slice(0, 2));
    displayProducts(filteredProducts);
    //console.log("filter", filteredProducts);
}
displayProducts(product);


