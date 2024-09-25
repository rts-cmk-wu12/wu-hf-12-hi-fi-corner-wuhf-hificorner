function addProduct(button) {
    const productName = button.previousElementSibling.previousElementSibling.innerHTML;
    const productPrice = button.previousElementSibling.innerHTML.slice(1);
    localStorage.setItem(productName, `${productName},${productPrice}`)
    console.log(productName);
    console.log(productPrice);
}