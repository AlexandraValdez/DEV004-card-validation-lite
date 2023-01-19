let ccNumber = document.getElementById('ccNumber')

ccNumber.addEventListener('keypress', (event) => {
  event.preventDefault() //Esto es lo que hace que no deje ingresar letras al input
  // console.log(event.keyCode)
  let valorTecla = String.fromCharCode(event.keyCode)
  //   console.log(valorTecla)
  let valorParsed = parseInt(valorTecla)
  // console.log(valorParsed)
  if(valorParsed) {
    ccNumber.value = ccNumber.value + valorParsed
  // eslint-disable-next-line eqeqeq
  } else if (valorParsed || valorTecla ==="0") {
    (ccNumber.value += valorParsed)

  }
})