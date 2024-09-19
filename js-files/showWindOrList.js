/*Denne side bruges til at vise produkterne i enten list eller som et vindue*/
/*Jeg starter med at tage fat i de 2 knapper*/

const viewAsWindows = document.querySelector(".sortData__viewAsWindows")
const viewAsList = document.querySelector(".sortData__viewAsList")

const form =document.querySelector(".sortData")


/*Jeg skal også have fat i den store productbox, så jeg kan ændre stylingen*/
const productBox = document.querySelector(".productBox")
//her giver jeg dem eventlisteners
viewAsWindows.addEventListener("click", showasWindowsFunc)
viewAsList.addEventListener("click", showasListFunc)

function showasWindowsFunc(event){
    productBox.classList.remove("productBoxList");
    //dette gør at knapperne skifter farve
    viewAsList.classList.remove("selectet");
    viewAsWindows.classList.add("selectet");

    event.preventDefault()
}
function showasListFunc(event){
    productBox.classList.add("productBoxList")
    viewAsList.classList.add("selectet");
    viewAsWindows.classList.remove("selectet");
    event.preventDefault()
}
