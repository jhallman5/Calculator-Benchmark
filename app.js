var memory = {
  this.initial = [],
  this.sign;
  this.latter = []
}

window.onload = document.querySelectorAll(".calculator-button").forEach(function(div) {
  (div).addEventListener('click', function(){
    (this.sign)
    ? memory.initial.push(this.innerHTML)
    : memory.latter.push(this.innerHTML)
    document.querySelector('.calculator-screen').innerHTML = memory.join('')
    console.log('memory: ' + memory.join(''))
  })
})
document.querySelectorAll(".corner").forEach(function(div) {
  (div).addEventListener('click', function(){
    var initialNumber = document.querySelector('.calculator-screen').innerHTML
    var secondNumber = document.querySelector('.calculator-screen').innerHTML
    console.log("n1 " + initialNumber)
    console.log("s2 " + memory.sign)
    console.log("n2 " + secondNumber)
    if (memory.sign = '+' )
      return initialNumber + secondNumber
    if (memory.sign = '-' )
      return initialNumber - secondNumber
    if (memory.sign = 'x' )
      return initialNumber * secondNumber
    if (memory.sign = '÷' )
      return initialNumber / secondNumber
  })
})
//
document.querySelectorAll(".orange").forEach(function(sign) {
  (sign).addEventListener('click', function(){
    var initialNumber = document.querySelector('.calculator-screen').innerHTML
    console.log("initialNumber: " + initialNumber)
    document.querySelector('.calculator-screen').innerHTML = ''
    memory = []
    memory.sign = this.innerHTML
    console.log("sign: " + memory.sign)
  })
})


// function addtion(currentNumber, nextNumber){
//   var currentNumber = document.querySelector('.calculator-screen').innerHTML
//   console.log(currentNumber)
//   document.querySelector('.calculator-screen').innerHTML = ''
//   equal(currentNumber, + , )
//   on equals (nextNumber = document.querySelector('.calculator-screen').innerHTML)
//   document.querySelector('.calculator-screen').innerHTML = currentNumber + nextNumber             ...0
// }
//
// function equal(previousNumber, sign, currentNumber) {
//   if (sign === +)
//     return previousNumber + currentNumber
//   if (sign === -)
//     return previousNumber - currentNumber
//
// }
