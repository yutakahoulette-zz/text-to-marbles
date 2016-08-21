var el = document.getElementById('marbles')

el.style.visibility = 'hidden'

var rowsText = el.innerHTML
  .replace(/\s/g, '')
  .split('|')
  .filter(Boolean)

el.innerHTML = ''

var canvas = document.createElement('canvas');

var ctx = canvas.getContext('2d')

var fullWidth = getInnerWidth(el) - 15

var rows = rowsText.map(function(x, i) {
  var o = {}
  o.units = x.split(',')
  o.len = o.units.length
  return o
})

var longestRow = rows.reduce(function(a, b) {
  if(a.len > b.len) return a
  return b
}, {}).len + 1

var colors = ['#5f8ace', '#d4c52e', '#77a66f', '#a7784e']

var unitSize = fullWidth / longestRow

canvas.width = fullWidth
canvas.height = unitSize  * rows.length * 1.2

rows.map(function(row, i) {
  draw(row, i)
})


function draw(row, i) {
  var y = (i + 0.5) * unitSize * 1.2
  horizontalLine(y)
  triangle(y)
  marbles(row, y, i)
}

function marbles(row, y, i) {
  var radius = unitSize / 2 
  var x = 0
  var unitSizeCopy = unitSize
  row.units.map(function(unit) {
    x += unitSizeCopy 
    if(unit) {
      // draw circles
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
      ctx.fillStyle = colors[i % colors.length] 
      ctx.fill()      
      // draw text
      var fontSize = unitSize / 2 
      ctx.font =  unitSize / 2 + 'px monospace'
      ctx.fillStyle = 'white'
      ctx.textBaseline = 'middle'
      ctx.textAlign = 'center'
      ctx.fillText(unit, x, y)
    }
  })
}

function horizontalLine(y) {
  ctx.beginPath()
  ctx.moveTo(0, y)
  ctx.lineTo(fullWidth, y)
  ctx.lineWidth = 1
  ctx.strokeStyle = 'grey' 
  ctx.closePath()
  ctx.stroke()
}

function triangle(y) {
  ctx.beginPath()
  ctx.moveTo(fullWidth, y)
  ctx.lineTo(fullWidth - 7, y + 4)
  ctx.lineTo(fullWidth - 7, y - 4)
  ctx.fillStyle = 'grey'
  ctx.fill()
}

function getInnerWidth(el) {
  var width = el.clientWidth
  var style = window.getComputedStyle ? getComputedStyle(el, null) : el.currentStyle
  width -= style.paddingLeft ? parseInt(style.paddingLeft) : 0
  width -= style.paddingRight ? parseInt(style.paddingRight) : 0
  return width
}

console.log(rowsText)

el.appendChild(canvas)
el.style.visibility = 'visible'

