const params = new URLSearchParams(window.location.search);
const chosenProduct = params.get('product');

const API_URL = 'http://localhost:3000/';

const response = await fetch(API_URL + 'products');
const productData = await response.json();

const productNavigationContainerElement = document.querySelector('#products-path');
const productDisplayViewContainer = document.querySelector('#product-display__view');
const productBasicInfo = document.querySelector('#product-information__basic-info');
const productVariantsContainer = document.querySelector('#product-information__variants');
const productTableElement = document.querySelector('#product-information__table');

productData.forEach((product) => {
    if (product.product_name == chosenProduct) {
        console.log(product);
        productNavigationContainerElement.innerHTML = `
        <span class="products-path__link">home</span>
        <span> / </span>
        <span class="products-path__filter products-path__link">${product.category}</span>
        <span> / </span>
        <span class="products-path__filter">${product.product_name}</span>`

        productNavigationContainerElement.addEventListener('click', (e) => {
            if (e.target.innerHTML == 'home') {
                location.assign('shoplist.html');
            }
            else if (e.target.innerHTML == product.category) {
                location.assign(`shoplist.html?category=${e.target.innerHTML}`);
            }
        })

        productDisplayViewContainer.innerHTML = `
        <img src="${product.image}" alt="product-img" class="product-display__img" id="product-display__img">`;

        if (product.variant) {
            const productDisplayVariants = document.createElement('section');
            productDisplayVariants.innerHTML = `
            <h2 class="product-display__heading">more views</h2>
            <div class="product-display__img-container" id="product-display__img-container"></div>`

            productDisplayViewContainer.appendChild(productDisplayVariants);
            const variantImgContainer = document.querySelector('#product-display__img-container');

            productVariantsContainer.innerHTML = `
                <div class="product-information__variants-text">
                        <p class="product-information__finish">finish</p>
                        <p class="product-information__required">* required fields</p>
                    </div>`
            
            product.variant.forEach((variant) => {
                const variantImage = document.createElement('img');
                variantImage.src = variant.image;
                variantImage.alt = variant.colour;

                variantImgContainer.appendChild(variantImage);
                variantImage.classList.add('product-display__option-img');

                const variantOptions = document.createElement('div');
                variantOptions.innerHTML = `
                <input type="radio" name="option" value="${variant.colour}">
                <p>${variant.colour}</p>`;
                productVariantsContainer.appendChild(variantOptions);
                variantOptions.classList.add('product-information__variants-options');

                const productDisplayImage = document.querySelector('#product-display__img');

                variantImage.addEventListener('click', () => {
                    productDisplayImage.src = variantImage.src;
                })

                variantOptions.addEventListener('change', (e) => {
                    if (e.target.value == variantImage.alt) {
                        productDisplayImage.src = variantImage.src;
                    }
                })
                
            })

        }

        
        productBasicInfo.innerHTML = `
        <h1 class="basic-info__product-name">${product.product_name}</h1>
                <div class="basic-info__details">
                    <a href="shoplist.html?producer=${product.producer}" class="basic-info__link">See other ${product.producer} products</a>
                    <p class="basic-info__price">£${product.price}</p>
                </div>
                <p class="basic-info__description">${product.description}</p>
                <div class="basic-info__buttons">
                    <button class="basic-info__btn">ask a question</button>
                    <button class="basic-info__btn">part exchange</button>
                    <button class="basic-info__btn">pay by finance</button>
                    <button class="basic-info__btn">seen a better price?</button>
                </div>`
        
        productTableElement.innerHTML = `
            <tbody>
                <tr>
                    <th scope="row" class="table__heading">manufacturer</th>
                    <td class="table__data">${product.producer}</td>
                </tr>
                <tr>
                    <th scope="row" class="table__heading">manufacturer link</th>
                    <td class="table__data"><a href="#" class="table__data-link">${product.producer}</a></td>
                </tr>
                <tr>
                    <th scope="row" class="table__heading">free warranty</th>
                    <td class="table__data">3 years</td>
                </tr>
                <tr>
                    <th scope="row" class="table__heading">delivery charge</th>
                    <td class="table__data">free</td>
                </tr>
                <tr>
                    <th scope="row" class="table__heading">delivery time</th>
                    <td class="table__data">1 - 5 working days</td>
                </tr>
                <tr>
                    <th scope="row" class="table__heading">card subcharges</th>
                    <td class="table__data">no</td>
                </tr>
            </tbody>`
    }
})