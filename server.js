const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log('REQUEST: '+req.url)
  next()
})

app.use(express.static('public'))


// -> http://localhost:3056/api/add/100/99


// GET /api/add/10/15
app.get('/api/:operation/:a/:b', (req, res) => {
  const a = Number(req.params.a)
  const b = Number(req.params.b)
  const result = add(a,b)
  console.log('ADD ON THE SERVER', a, '+', b, '=', result)
  res.send(result.toString())
})

app.listen(3056)





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
