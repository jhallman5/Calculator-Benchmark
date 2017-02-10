var memory = {
  initial: [],
  operation: undefined,
  latter: []
}

document.querySelector('.calculator').addEventListener('click', function(e) {

  //display variable is not working
  var display = document.querySelector('.calculator-screen').innerHTML
  var target = e.target || e.srcElement

  if(memory.operation){
    memory.current = memory.latter
  }else {
    memory.current = memory.initial
  }

  if (target.dataset.operation) {
    memory.operation = target.dataset.operation
  }

  if( target.dataset.value ){
    memory.current.push(target.dataset.value)
    document.querySelector('.calculator-screen').innerHTML = memory.initial.join('')
  }

  if(memory.initial.length > 0 ){
    document.querySelector('.clear').innerHTML = 'C'
    document.querySelector('.clear').dataset.clear = 'C'
  }

  if(target.dataset.clear){
    if(target.dataset.clear === 'AC'){
      memory = {
        initial: [],
        operation: undefined ,
        latter: []
      }
    }else if(target.dataset.clear === 'C'){
      memory.current = []
      target.innerHTML = 'AC'
      target.dataset.clear = 'AC'
    }
    document.querySelector('.calculator-screen').innerHTML = 0
  }
//not 100% accurate
  if(target.dataset.swap) {
    if(memory.current[0] === '-'){
      memory.current.shift()
    }else {
      memory.current.unshift('-')
    }
    document.querySelector('.calculator-screen').innerHTML  = memory.current.join('')
  }

//not quite working
  if(target.dataset.percent){
    var negative = false
    if(memory.current[0] === '-'){
      memory.current.shift()
      negative = true
    }
    var value = parseFloat(memory.current.join(''))
    memory.current = (value / 100).toString().split('')

    if(negative) {
      memory.current.unshift('-')
    }

    document.querySelector('.calculator-screen').innerHTML  = memory.current.join('')
  }

  if( target.dataset.decimal && memory.current.indexOf('.') === -1 ) {
    memory.current.push(target.dataset.decimal)
  }
 if(target.dataset.equal) {
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
  }
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
