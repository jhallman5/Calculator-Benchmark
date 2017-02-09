var memory = {
  initial: [],
  operation: undefined,
  latter: [],
}
//remove event listener from corner
function operationAdder(div) {
  memory.operation = div.innerHTML
}

function numberCounter(div) {
  if( !memory.operation ){
    memory.initial.push(this.innerHTML)
    document.querySelector('.calculator-screen').innerHTML = memory.initial.join('')
    
}



document.querySelectorAll(".operator").forEach(function(div) {
  (div).addEventListener('click', operationAdder(div) )
  (div).removeEventListener('click', numberCounter(div) )
  //remove the push to array function
})

document.querySelectorAll(".calculator-button").forEach(function(div) {
  (div).addEventListener('click', function(){
    if(div.innerHTML === "AC")
      memory = {
        initial: [],
        operation: [],
        latter: [],
      }
    if( !memory.operation ){
      memory.initial.push(this.innerHTML)
      document.querySelector('.calculator-screen').innerHTML = memory.initial.join('')

      if(memory.initial.length > 0 ){
        document.querySelector('.clear').innerHTML = 'C'
      }
      if(div.innerHTML === "C"){
        memory.initial = []
        document.querySelector('.calculator-screen').innerHTML = 0
        div.innerHTML = "AC"
      }
      // +/- not complete
      // if(div.innerHTML = "+/-") {
      //   reverseSign(parseFloat(memory.initial.join(''))).toString().split('')
      //
      // }

    }else if( memory.operation ){
      memory.latter.push(this.innerHTML)
      if( memory.latter[ memory.latter.length - 1 ] === memory.operation[ memory.operation.length - 1 ] ){
        memory.latter.splice(memory.latter.length - 1, 1)
      }
      document.querySelector('.calculator-screen').innerHTML = memory.latter.join('')

      if(memory.latter.length > 0 ){
        document.querySelector('.clear').innerHTML = 'C'
      }
      if(div.innerHTML === "C"){
        memory.latter = []
        document.querySelector('.calculator-screen').innerHTML = 0
        div.innerHTML = "AC"
      }
    }

        // document.querySelector('.calculator-screen').innerHTML = 0
// if (div.innerHTML === '+/-')
//   memory.latter.unshift('-'),
//   document.querySelector('.calculator-screen').innerHTML = memory.latter.join('')



    // if(div.innerHTML === "%")
    //  memory.initial.splice(memory.initial.length - 1, 1)
    //   if( memory.operation.length === 0 )
    //     var percent = parseFloat(memory.initial.join(''))
    //       console.log(divide(percent, 100))
    //       document.querySelector('.calculator-screen').innerHTML = divide(percent, 100)
    //   // else if (memory.operation.length === 0)
      //     memory.initial.unshift('0','.', '0'),
      //     document.querySelector('.calculator-screen').innerHTML = memory.initial.join('')
      // else if(  memory.operation.length > 0 && memory.latter.includes('.') )
      //       memory.latter.unshift('0', '0'),
      //       document.querySelector('.calculator-screen').innerHTML = memory.initial.join('')
      // else if( memory.operation.length > 0)
      //       memory.latter.unshift('0','.', '0'),
      //       document.querySelector('.calculator-screen').innerHTML = memory.latter.join('')

    console.log(memory)
  })
})

// equal function ====================================================================
document.querySelectorAll(".corner").forEach(function(div) {
    (div).removeEventListener('click', operationAdder(div) )
  })

document.querySelectorAll(".corner").forEach(function(div) {
  (div).addEventListener('click', function(){
    if(memory.latter.length > 0){
      var value1 = parseFloat(memory.initial.join(''))
      var value2 = parseFloat(memory.latter.join(''))
      switch (memory.operation[0]) {
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
function reverseSign(a, b) {
  if(b)
    return -a
  else
    return a
}
