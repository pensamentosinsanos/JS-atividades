const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcIMC = () => {

  if (altura.value !== '' && peso.value !== '') {
    const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
 
    resultado.innerHTML = `IMC: ${imc}`
  } else {
    resultado.innerHTML = 'Preencha os campos'
  }
}
