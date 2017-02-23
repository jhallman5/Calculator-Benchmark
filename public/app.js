var memory = {
  initial: [],
  operation: undefined,
  latter: [],
  busy: false,
}

document.querySelector('.calculator').addEventListener('click', function(e) {
  if (memory.busy) return false;

  var target = e.target || e.srcElement

  if (memory.operation) {
    memory.current = memory.latter
  }else {
    memory.current = memory.initial
  }

  if (target.dataset.operation) {
    memory.operation = target.dataset.operation
  }

  if (target.dataset.value ) {
    memory.current.push(target.dataset.value)
    document.querySelector('.calculator-screen').innerHTML = memory.initial.join('')
  }

  if (memory.current.length > 0 ) {
    document.querySelector('.clear').innerHTML = 'C'
  }

//unclear on why this doesnt work
  if (target.dataset.clear) {
    if (memory.current.length === 0) {
      memory.initial = []
      memory.operation = undefined
      memory.latter = []
    }else if (memory.current.length !== 0) {
      memory.current = []
      target.innerHTML = 'AC'
    }
    document.querySelector('.calculator-screen').innerHTML = 0
  }

  if (target.dataset.swap) {
    if (memory.current[0] === '-') {
      memory.current.shift()
    }else {
      memory.current.unshift('-')
    }
    document.querySelector('.calculator-screen').innerHTML  = memory.current.join('')
  }

//not quite working
  if (target.dataset.percent) {
    var value = parseFloat(memory.current.join(''))
    memory.current = (value / 100).toString().split('')
    document.querySelector('.calculator-screen').innerHTML  = memory.current.join('')
  }

  if (target.dataset.decimal && memory.current.indexOf('.') === -1 ) {
    memory.current.push(target.dataset.decimal)
  }
 if (target.dataset.equal) {
    var value1 = parseFloat(memory.initial.join(''))
    var value2 = parseFloat(memory.latter.join(''))
    switch (memory.operation) {
      case '+':
        // value1 = add(value1, value2)
        // document.querySelector('.calculator-screen').innerHTML = value1
        add(value1, value2, function(result){
          value1 = result
          document.querySelector('.calculator-screen').innerHTML = value1
          memory.initial = value1.toString().split('')
        })
        break;
      case '–':
        value1 = subtract(value1, value2);
        document.querySelector('.calculator-screen').innerHTML = value1
        memory.initial = value1.toString().split('')
        break;
      case 'x':
        value1 = multiply(value1, value2)
        document.querySelector('.calculator-screen').innerHTML = value1
        memory.initial = value1.toString().split('')
        break;
      case '÷':
        value1 = divide(value1, value2);
        document.querySelector('.calculator-screen').innerHTML = value1
        memory.initial = value1.toString().split('')
        break;
    }

  }
})

function add(a, b, callback) {
  // SEND AN XHR / AJAX request to `/api/add/${a}/${b}`
  console.log('sending add request to server')
  fetch({`/api/add/${a}/${b}`})
    .then(response => response.text())
    .then(result => {
      console.log('server respoinded with '+result)
      callback(result)
    })

  
  // console.log('starting weork')
  // setTimeout(function(){
  //   console.log('done working')
  //   callback(a + b)
  // }, 1000)
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
