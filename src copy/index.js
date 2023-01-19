const luhnAlgorithm = (ccNumber) => {
  const length = ccNumber.length;
  let count = 0;

  //reverse the credit card number, if index (i) is even double the value, if above 9 then adjust value
  for(let i = 0; i < length; i++) {
    let currentDigit = parseInt(ccNumber[i]);
    
    if ((i+2) % 2 == 0)
      if ((currentDigit *= 2) > 9) currentDigit -= 9;

      count += currentDigit;

  }

  return (count % 10) === 0;

}


// eslint-disable-next-line no-unused-vars
const checkCC = () => {
  const elCCNumber = document.getElementById('ccNumber');
  const elCCValidation = document.getElementById('ccValidator');
  let message = "";

  if( luhnAlgorithm(elCCNumber.value) )
    message = "It worked";
  else
    message = "CC verification failed";
  elCCValidation.textContent = message;
};






