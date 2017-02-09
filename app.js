var memory = {
  initial: [],
  operation: undefined, r: []
}

function operationAdder(div) {
  memory.operation = this.innerHTML
}

function numberCounter(div) {
  if( !memory.operation && (this.innerHTML !== 'AC' || '+/-' || '%' || '.' )) {
      memory.initial.push(this.innerHTML)
      document.querySelector('.calculator-screen').innerHTML = memory.initial.join('')
  }else if( memory.operation && (this.innerHTML !== 'AC' || '+/-' || '%' || '.' )) {
      memory.latter.push(this.innerHTML)
      document.querySelector('.calculator-screen').innerHTML = memory.latter.join('')
  }
}

document.querySelectorAll(".calculator-button").forEach(function(div) {
  div.addEventListener('click', numberCounter )
  div.addEventListener('keyup', numberCounter )
  div.addEventListener('click', function(){
    if(div.innerHTML === "AC"){
      memory = {
        initial: [],
        operation: undefined ,
        latter: []
      }
    }

    if(memory.initial.length > 0 ){
      document.querySelector('.clear').innerHTML = 'C'
    }

    if(div.innerHTML === "C" && !memory.operation ){
      memory.initial = []
      document.querySelector('.calculator-screen').innerHTML = 0
      div.innerHTML = "AC"
    }
    if(div.innerHTML === "C" && memory.operation ){
      memory.latter = []
      document.querySelector('.calculator-screen').innerHTML = 0
      div.innerHTML = "AC"
    }

    if (div.innerHTML === '+/-' && memory.latter.length === 0 ){
      var value = parseFloat(memory.initial.join(''))
      memory.initial = (value * -1).toString().split('')
    }else if (div.innerHTML === '+/-' && memory.latter.length > 0 ){
      var value = parseFloat(memory.latter.join(''))
      memory.latter = (value * -1).toString().split('')
    }

    if (div.innerHTML === '%' && memory.latter.length === 0 ){
      var value = parseFloat(memory.initial.join(''))
      memory.initial = (value / 100).toString().split('')
    }else if (div.innerHTML === '%' && memory.latter.length > 0 ){
      var value = parseFloat(memory.latter.join(''))
      memory.latter = (value / 100).toString().split('')
    }

    if( (div.innerHTML === '.') && (memory.latter.length === 0) && (memory.initial.indexOf('.') === -1 ) ){
      memory.initial.push('.')
      document.querySelector('.calculator-screen').innerHTML = memory.initial.join('')
    }else if( (div.innerHTML === '.') && (memory.latter.length > 0) && (memory.latter.indexOf('.') === -1 ) ){
      memory.latter.push('.')
      document.querySelector('.calculator-screen').innerHTML = memory.latter.join('')
    }
  })
})

document.querySelectorAll(".operator").forEach(function(div) {
  div.addEventListener('click', operationAdder )
  div.removeEventListener('click', numberCounter )
})

document.querySelectorAll(".corner").forEach(function(div) {
  div.removeEventListener('click', operationAdder )
  div.addEventListener('click', function(){
    var value1 = parseFloat(memory.initial.join(''))
    var value2 = parseFloat(memory.latter.join(''))
    switch (memory.operation) {
      case '+':
        value1= add(value1, value2)
        document.querySelector('.calculator-screen').innerHTML = value1
        break;
      case '–':
        value1 = subtract(value1, value2);
        document.querySelector('.calculator-screen').innerHTML = value1
        break;
      case 'x':
        value1 = multiply(value1, value2)
        document.querySelector('.calculator-screen').innerHTML = value1
        break;
      case '÷':
        value1 = divide(value1, value2);
        document.querySelector('.calculator-screen').innerHTML = value1
        break;
    }
    memory.initial = value1.toString().split('')
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
