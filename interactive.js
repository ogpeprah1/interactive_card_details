// card name
const CardName = document.getElementById("card-name-input");
const CardNameField = document.getElementById("card-name");

CardName.oninput =  function(){
    CardNameField.innerHTML = CardName.value;
    if(CardName.value == ""){
        CardNameField.innerHTML = "Jane Appleseed";
    }
}




//card number
const CardNumber = document.getElementById("card-number-input");
const CardNumberField = document.getElementById("card-number");
const cardNumberWarning = document.querySelector(".number-warning")

CardNumber.oninput = function(){
    CardNumberField.innerHTML = CardNumber.value;

    if(CardNumber.value == ""){
        CardNumberField.innerHTML = "0000 0000 0000 0000";
    }
}

CardNumber.onkeyup = function(){
    if(isNaN(CardNumber.value) && CardNumber.value == " "){
        cardNumberWarning.style.display = "inline";
    }
    else
    {
        cardNumberWarning.style.display = "none";
    }

    let inputOfNumber = CardNumber.value.replace(/\D/g,'')
    let chunksOfFour = inputOfNumber.match(/.{1,4}/g) || []
    CardNumber.value = chunksOfFour.join(' ')


    if(CardNumber.value.length > 19){
        CardNumber.style.outline = '2px solid red'
        cardNumberWarning.style.display = "inline";
        cardNumberWarning.innerHTML = "Please enter 16 numbers only"
    }
    else{
        CardNumber.style.outline = '2px solid blue'
        cardNumberWarning.style.display = "none";
    }

}

//card expiry
//expiry month
const expiryMonth = document.getElementById("expiry-month")
const expiryMonthField = document.getElementById("month-field")
const expiryWarning = document.querySelector(".form-item-exp-warning")

expiryMonth.oninput = function(){
    expiryMonthField.innerHTML = expiryMonth.value;

    if(expiryMonth.value == ""){
        expiryMonthField.innerHTML = "00";
        expiryWarning.innerHTML = "";
    }
}

expiryMonth.onkeyup = function(){
    if(expiryMonth.value == 0 || expiryMonth.value > 12){
        expiryWarning.style.display = "inline";
        expiryWarning.innerHTML = "Month is not valid";
        expiryMonth.style.outline = '2px solid red'
    }
    else{
        expiryWarning.style.display = "none"
        expiryMonth.style.outline = '2px solid blue'
    }

}

// expiry year
const expiryYear = document.getElementById("expiry-year")
const expiryYearField = document.getElementById("year-field")

expiryYear.oninput = function(){
    expiryYearField.innerHTML = expiryYear.value;

    if(expiryYear.value == ""){
        expiryYearField.innerHTML = "00";
    }

    expiryYear.onkeyup = function(){
        if(expiryYear.value < 1000 || expiryYear.value > 9999){
            expiryWarning.style.display = "inline"
            expiryWarning.innerHTML = "Year is invalid";
            expiryYear.style.outline = '2px solid red'
        }
        else{
            expiryWarning.style.display = "none"
            expiryYear.style.outline = '2px solid blue'
        }
    }
}


// cvc
const cardCVCField = document.getElementById("card-cvc")
const cardCVC = document.getElementById("cvc-input")
const cardCVCWarning = document.querySelector(".cvc-warning")

cardCVC.oninput = function(){
    cardCVCField.innerHTML = cardCVC.value;

    if(cardCVC.value == ""){
        cardCVCField.innerHTML = "00";
    }
}

cardCVC.onkeyup = function(){
    if(cardCVC.value < 100 || cardCVC.value > 999){
        cardCVCWarning.style.display = "inline"
        cardCVCWarning.innerHTML = "CVC is invalid";
        cardCVC.style.outline = '2px solid red'
    }
    else{
        cardCVCWarning.style.display = "none"
        cardCVC.style.outline = '2px solid blue'
    }
}


// confirm button
const SubmitBtn = document.getElementById("confirmBtn")
const CardForm = document.querySelector("form");
const CompleteDisplay = document.getElementById("complete-display");
const completeBtn = document.getElementById('ContinueBtn')


SubmitBtn.onclick = function(){
    if(cardCVC.value == ""){
        cardCVCWarning.style.display = "inline"
    }
    else{
        cardCVCWarning.style.display = "none"
        SubmitBtn.innerHTML = "Continue";
        CardForm.style.display = "none";
        CompleteDisplay.style.display = "flex"
    }

    event.preventDefault();
}



ContinueBtn.onclick = function(){
    CardForm.style.display = "flex";
    CompleteDisplay.style.display = "none"
}

