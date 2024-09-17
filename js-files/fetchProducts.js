//jeg starter med at tage fat i min div, hvor elementer skal placeres i
const divBox = document.querySelector(".productBox")

//nu fetcher jeg alle prdukterne

const response =  await fetch("http://localhost:3000/products");
const data = await response.json();

data.forEach(product => {
    //her laver jeg en div som skal omkrandse hele prodktet
    const productDiv = document.createElement("article")
    productDiv.classList.add("product")
    divBox.appendChild(productDiv)
    //nu laver jeg en div der er med til at putte billede ind i en firkant
    const imageDiv = document.createElement("div")
    imageDiv.classList.add("product__imageDiv")
    productDiv.appendChild(imageDiv)
    //putter imageDiv ind i produtDiv
    //nu adder jeg billede et
    const image = document.createElement("img")
    image.classList.add("product__image")
    //putter imageDiv ind i produtDiv
    //for at finde frem til det rigtige billede bliver koden lidt mærkelig men det er fordi at billeder er delt op i forskellige mapper
    image.setAttribute("src", "images/produktbilleder/" + product.category + "/" + product.image)
    imageDiv.appendChild(image)
    //nu kommer vi til produktet navnet
    const productName = document.createElement("h2")
    productName.textContent = product.name
    productName.classList.add("product__name")
    productDiv.appendChild(productName)

    //nu kommer det til prisen på prduktet
    const productPrice = document.createElement("p")
    productPrice.textContent = product.price
    productPrice.classList.add("product__price")
    productDiv.appendChild(productPrice)



    
});