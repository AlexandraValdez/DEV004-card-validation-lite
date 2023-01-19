




const validateButton = document.getElementById('validate-button');
validateButton.addEventListener('click',validate);
const results =  document.getElementById('result');

function validate() {
  const creditCardNumber = document.getElementById('card-number').value;
  //console.log(creditCardNumber);

  const valid = isValid(creditCardNumber);
  if (valid) { 
    // Show success in div#result
    results.innerHTML = "la tarjeta es valida";
  }
  else {
    // Show error message in div#result
    results.innerHTML = "la tarjeta no es valida";
  }
}

function isValid(creditCardNumber){
  // is creditCardNumber valid?
  return true
}


