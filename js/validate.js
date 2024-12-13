const newsletter = document.querySelector(".newsletter");
// variabel til formen (class="newsletter")
const newsletter__input = document.querySelector(".newsletter__input");
// variabel til inputfeltet (class="newsletter__input")

newsletter.addEventListener("submit", function (evt) {
    
    let error = "skriv korrekt e-mail fx: name@company.com";
    // variabel med standard fejlbesked til email

    let email = this.email.value;
    // variabel til det indtastede i inputfeltet

    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // regular expression til korrect emailformat

    if (!email.match(regexEmail)) {
        evt.preventDefault(); // formularen sendes ikke afsted, hvis der er fejl i indtastning
        newsletter__input.placeholder = error; // fejlbesked udskrives i placeholder
        newsletter__input.classList.add("error"); // med rødt, jvf. class .error i style.css
        newsletter__input.focus(); // markøren sættes i inputfeltet og dette markeres med border
        return false; // scriptet stoppes, hvis der er fejl
    }
});