
const payment = document.querySelector("#fakturering");

payment.addEventListener("submit", function (evt) {
    let address = this.address.value;
    let city = this.city.value;
    let zipcode = this.zipcode.value;
    let pmail = this.pmail.value;
    let cnumber = this.cnumber.value;
    let cmonth = this.cmonth.value;
    let cyear = this.cyear.value;
    let cccv = this.cccv.value;
    let cname = this.cname.value;
    // variabler til det indtastede i inputfeltet

    if (address == "") {
        evt.preventDefault(); // formularen sendes ikke afsted, hvis der er fejl i indtastning
        this.address.placeholder ="Skriv din adresse!"; // fejlbesked udskrives i placeholder
        this.address.classList.add("error"); // med rødt, jvf. class .error i style.css
        this.address.focus(); // markøren sættes i inputfeltet og dette markeres med border
        return false; // scriptet stoppes, hvis der er fejl
    }

    if (city == "") {
        evt.preventDefault(); // formularen sendes ikke afsted, hvis der er fejl i indtastning
        this.city.placeholder ="Skriv dit bynavn!"; // fejlbesked udskrives i placeholder
        this.city.classList.add("error"); // med rødt, jvf. class .error i style.css
        this.city.focus(); // markøren sættes i inputfeltet og dette markeres med border
        return false; // scriptet stoppes, hvis der er fejl
    }

    const regexZip = /^([0-9]{3,5})$/;
    if (!zipcode.match(regexZip)) {
        evt.preventDefault(); // formularen sendes ikke afsted, hvis der er fejl i indtastning
        this.zipcode.placeholder ="Skriv korrekt postnummer!"; // fejlbesked udskrives i placeholder
        this.zipcode.classList.add("error"); // med rødt, jvf. class .error i style.css
        this.zipcode.focus(); // markøren sættes i inputfeltet og dette markeres med border
        return false; // scriptet stoppes, hvis der er fejl
    }

    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // regular expression til korrect emailformat
    if (!pmail.match(regexEmail)) {
        evt.preventDefault(); // formularen sendes ikke afsted, hvis der er fejl i indtastning
        this.pmail.placeholder = "Skriv korrekt e-mail fx mail@mail.dk"; // fejlbesked udskrives i placeholder
        this.pmail.classList.add("error"); // med rødt, jvf. class .error i style.css
        this.pmail.focus(); // markøren sættes i inputfeltet og dette markeres med border
        return false; // scriptet stoppes, hvis der er fejl
    }

    const regexCnumber = /^\d{16}$/;
    if (!cnumber.match(regexCnumber)) {
        evt.preventDefault(); // formularen sendes ikke afsted, hvis der er fejl i indtastning
        this.cnumber.placeholder ="Skriv korrekt kortnummer!"; // fejlbesked udskrives i placeholder
        this.cnumber.classList.add("error"); // med rødt, jvf. class .error i style.css
        this.cnumber.focus(); // markøren sættes i inputfeltet og dette markeres med border
        return false; // scriptet stoppes, hvis der er fejl
    }
    
    const regexCmonth = /^\d{2}$/;
    if (!cmonth.match(regexCmonth)) {
        evt.preventDefault(); // formularen sendes ikke afsted, hvis der er fejl i indtastning
        this.cmonth.placeholder ="2tal"; // fejlbesked udskrives i placeholder
        this.cmonth.classList.add("error"); // med rødt, jvf. class .error i style.css
        this.cmonth.focus(); // markøren sættes i inputfeltet og dette markeres med border
        return false; // scriptet stoppes, hvis der er fejl
    }
    const regexCyear = /^\d{2}$/;
    if (!cyear.match(regexCyear)) {
        evt.preventDefault(); // formularen sendes ikke afsted, hvis der er fejl i indtastning
        this.cyear.placeholder ="2tal"; // fejlbesked udskrives i placeholder
        this.cyear.classList.add("error"); // med rødt, jvf. class .error i style.css
        this.cyear.focus(); // markøren sættes i inputfeltet og dette markeres med border
        return false; // scriptet stoppes, hvis der er fejl
    }

    const regexCccv = /^\d{3}$/;
    if (!cccv.match(regexCccv)) {
        evt.preventDefault(); // formularen sendes ikke afsted, hvis der er fejl i indtastning
        this.cccv.placeholder ="3tal"; // fejlbesked udskrives i placeholder
        this.cccv.classList.add("error"); // med rødt, jvf. class .error i style.css
        this.cccv.focus(); // markøren sættes i inputfeltet og dette markeres med border
        return false; // scriptet stoppes, hvis der er fejl
    }

    if (cname == "") {
        evt.preventDefault(); // formularen sendes ikke afsted, hvis der er fejl i indtastning
        this.cname.placeholder ="Skriv dit fulde navn!"; // fejlbesked udskrives i placeholder
        this.cname.classList.add("error"); // med rødt, jvf. class .error i style.css
        this.cname.focus(); // markøren sættes i inputfeltet og dette markeres med border
        return false; // scriptet stoppes, hvis der er fejl
    }

});