var textToMarbles = require('../index.js')

var input = document.getElementById('input')
var marbles = document.getElementById('marbles')    

input.oninput = draw 

function draw(e) {
  marbles.innerHTML = e.target.value
  textToMarbles(marbles)
}

marbles.innerHTML = input.value

textToMarbles(marbles)

