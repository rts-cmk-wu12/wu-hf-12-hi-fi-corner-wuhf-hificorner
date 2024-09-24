document.querySelector("#form1").addEventListener("submit", validate);
const messageField = document.querySelector("#besked")

function validate(evt) {
    let error;



// Det her er til validering 
    if (this.address.value == "") {
        evt.preventDefault();
        error = "udfyld venligst din adresse!";
        messageField.textContent = error;
        this.address.focus();
        return false;
    }

    if (this.town.value == "") {
        evt.preventDefault();
        error = "Skriv venligst din By!";
        messageField.textContent = error;
        this.town.focus();
        return false;
    }


    if (this.phone.value == "") {
        evt.preventDefault();
        error = "udfyld venligst dit postnummer!";
        messageField.textContent = error;
        this.phone.focus();
        return false;
    }



    if (isNaN(this.phone.value)) {
        evt.preventDefault();
        error = "dit telefonnummer skal være med tal !";
        messageField.textContent = error;
        this.phone.focus();
        return false;
    }


    if (this.email1.value == "") {
        evt.preventDefault();
        error = "udfyld venligst din e-mail adresse!";
        messageField.textContent = error;
        this.email1.focus();
        return false;
    }

    const atpos = this.email1.value.indexOf("@");
    const dotpos = this.email1.value.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= this.email1.value.length) {
        evt.preventDefault();
        error = "din e-mail adresse skal være gyldig (fx navn@mail.dk)!";
        messageField.textContent = error;
        this.email1.focus();
        return false;
    }
}


if (this.card.value == "") {
    evt.preventDefault();
    error = "udfyld venligst dit kort nummer!";
    messageField.textContent = error;
    this.card.focus();
    return false;
}




if (this.card.value.length < 16) {
    evt.preventDefault();
    error = "Dit kort nummer skal være mindst 16 cifre!";
    messageField.textContent = error;
    this.card.focus();
    return false;
}


if (this.date.value == "") {
    evt.preventDefault();
    error = "Skriv venligst din udløbsdato på dit kort!";
    messageField.textContent = error;
    this.date.focus();
    return false;
}


if (this.cvv.value == "") {
    evt.preventDefault();
    error = "udfyld venligst dit CVV nummer!";
    messageField.textContent = error;
    this.cvv.focus();
    return false;
}

if (this.cvv.value.length < 3) {
    evt.preventDefault();
    error = "Dit CVV skal være mindst 3 cifre!";
    messageField.textContent = error;
    this.cvv.focus();
    return false;
}


if (this.name.value == "") {
    evt.preventDefault();
    error = "udfyld venligst dit navn!";
    messageField.textContent = error;
    this.name.focus();
    return false;
}







// Hent det gemte produkt fra localStorage
const cartProduct = JSON.parse(localStorage.getItem('cartProduct'));

// Hvis der er et produkt i kurven, vis det
if (cartProduct) {
    // Find elementerne hvor produktdataene skal vises
    const cartProductName = document.querySelector('.cart-product-name');
    const cartProductPrice = document.querySelector('.cart-product-price');
    const cartProductImage = document.querySelector('.cart-product-image');

    // Opdater elementerne med produktdataene
    cartProductName.textContent = cartProduct.name;
    cartProductPrice.textContent = `${cartProduct.price} DKK`;
    cartProductImage.src = cartProduct.photo;
    cartProductImage.alt = cartProduct.name;
}


