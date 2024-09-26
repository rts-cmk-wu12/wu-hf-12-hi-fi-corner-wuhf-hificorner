//først tager jeg fat i diven ehvor produkterne skal være i


const buyedproducts = ["varer:1:Produktbilleder/cd-afspillere/creek_Destiny_CD.jpg:12", "højtaler:2:Produktbilleder/cd-afspillere/creek_Destiny_CD.jpg:2"]

console.log(buyedproducts)
const cart_items = document.querySelector(".cart_items")
//først deler jeg det array op, der er indsat
let localstoragecartItem  = localStorage.getItem("cart")
console.log(localstoragecartItem)
const myArray = localstoragecartItem.split(",");
console.log(myArray)
//nu kører jeg en foreach
myArray.forEach( element => {
    //her opdeler jeg poduktet ud fra de punktemmer det er i hvert elemet i arrayet
    const opdelt  = element.split(":")
    console.log(opdelt[0])
    //nu kommer koden til at indsætte hvert element på siden på en flot måde
    const parentDiv = document.createElement("article")
    parentDiv.classList.add("cartProduct")
    const heading = document.createElement("h2")
    heading.textContent = opdelt[0]
    parentDiv.appendChild(heading)
    const price = document.createElement("p")
    price.textContent= opdelt[1]
    parentDiv.appendChild(price)
    const count = document.createElement("input")
    count.addEventListener("input",changeValue)
    count.type  = "number"
    count.value= Number(opdelt[3])
    parentDiv.appendChild(count)
    const image = document.createElement("img")
    image.setAttribute("src", "images/" + opdelt[2])
    parentDiv.appendChild(image)
    cart_items.appendChild(parentDiv)

} )

//her fetcher jeg alle produkter 

function changeValue(){
    //først tager jeg fat i navnet på varen
    let nameofElement = this.parentElement.querySelector("h2").textContent
    
    myArray.forEach( element => {
        //her opdeler jeg poduktet ud fra de punktemmer det er i hvert elemet i arrayet
        const opdelt  = element.split(":")
        console.log(opdelt[0] ==nameofElement)
        if(opdelt[0] ==nameofElement){
            opdelt[1] = this.value
            console.log(myArray.indexof(element))
        }
    })
    localStorage.setItem("cart", myArray)
    console.log(myArray)
    
}