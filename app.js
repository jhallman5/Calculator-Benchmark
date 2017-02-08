var memory = {
  initial: [],
  sign: [],
  latter: [],
}

document.querySelectorAll(".operator").forEach(function(sign) {
  (sign).addEventListener('click', function(){
    memory.sign.push(this.innerHTML)
    console.log("sign: " + memory.sign)
  })
})

document.querySelectorAll(".calculator-button").forEach(function(div) {
  (div).addEventListener('click', function(){
    if(div.innerHTML === "AC") {
      memory = {
        initial: [],
        sign: [],
        latter: [],
      }
      document.querySelector('.calculator-screen').innerHTML = 0
    }else if( memory.sign.length === 0 ){
      memory.initial.push(this.innerHTML)
      document.querySelector('.calculator-screen').innerHTML = memory.initial.join('')
    }else  {
      memory.latter.push(this.innerHTML)
      if( memory.latter[ memory.latter.length - 1 ] === memory.sign[ memory.sign.length - 1 ])
        memory.latter.splice(memory.latter.length - 1, 1)
      document.querySelector('.calculator-screen').innerHTML = memory.latter.join('')
    }
    console.log(memory)
    console.log(typeof div.innerHTML)
  })
})
document.querySelectorAll(".corner").forEach(function(div) {
  (div).addEventListener('click', function(){
    var value1 = parseFloat(memory.initial.join(''))
    var value2 = parseFloat(memory.latter.join(''))
    switch (memory.sign[0]) {
      case '+':
        document.querySelector('.calculator-screen').innerHTML = add(value1, value2);
        break;
      case '–':
        document.querySelector('.calculator-screen').innerHTML = subtract(value1, value2);
        break;
      case 'x':
        document.querySelector('.calculator-screen').innerHTML = multiply(value1, value2);
        break;
      case '÷':
        document.querySelector('.calculator-screen').innerHTML = divide(value1, value2);
        break;
      }
  })
})

function add(a, b) {
  return a + b
}
function subtract(a, b) {
  return a - b
}
function multiply(a, b) {
  return a * b
}
function divide(a, b){
  return a / b
}

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
