# text-to-marbles

A small, no-dependencies package that converts text representations of streams/observables into static canvas visualizations. Useful for adding visualizations to docs. Based on [statlz](https://github.com/staltz)'s awesome interactive [rxmarbles project](https://github.com/staltz/rxmarbles).


### See [demo](https://yutakahoulette.github.io/text-to-marbles/demo).

## Usage

```
npm intall text-to-marbles
```

### HTML
```HTML
<div id='marbles'>
, ,1,2,3, ,4,|
,a, , ,b,c,d
# sampleOn
, , , ,b, ,d 
</div>
```
- each line of text represents a stream/observable 
- each comma separated unit represents a value on a stream
- a `|` represents the end of a stream/observable
- a `#` at the beginning of a line creates a text row

### JS
```JS
import textToMarbles from 'text-to-marbles'

let config = {colors: ['blue', 'yellow', 'green']}

// Takes either a DOM element or selector string for the first argument
// and an optional config object for the second argument.
textToMarbles(document.getElementById('marbles'), config)
```

### Config
- colors: Takes an array of colors. Each color will be applied to the corresponding stream's/observable's marbles.





