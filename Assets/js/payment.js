function showPayPalForm() {
    document.getElementById('credit-card-form').style.display = 'none';
    
    document.getElementById('paypal-form').style.display = 'flex';
}

function showCreditCardForm() {
    document.getElementById('paypal-form').style.display = 'none';

    document.getElementById('credit-card-form').style.display = 'flex';
}




function validation(e) {

   
    let errorName = document.getElementById('errorName');
    let errorCardNumber = document.getElementById('errorCardNumber');
    let errorDate = document.getElementById('errorDate');
    let errorCVV = document.getElementById('errorCVV');

    let fname = document.getElementById("fname").value; 
    if (fname == "") {
        errorName.textContent = 'Name is required.';
    }

    let cardNumber = document.getElementById("cardnumber").value; 
    if (cardNumber == "") {
        errorCardNumber.textContent = 'Card number is required.';
    }

    let date = document.getElementById("date").value; 
    if (date == "") {
        errorDate.textContent = 'Expiration date is required.';
    }

    let cvv = document.getElementById("cvv").value; 
    if (cvv == "") {
        errorCVV.textContent = 'Cvv is required.';
    }
   e.preventDefault();
  }


