var textToMarbles = require('../index.js')

var textarea = document.getElementsByTagName('textarea')[0]
var marbles = document.getElementsByTagName('figure')[0]

textarea.oninput = draw 

function draw(e) {
  marbles.innerHTML = e.target.value
  textToMarbles(marbles)
}

marbles.innerHTML = textarea.value

textToMarbles(marbles)

