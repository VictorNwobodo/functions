//definning a function

// A function declaration without a variable assigned to it.
function add(a, b) {
	return a + b
}
console.log(add(30, 40))

// arrow function declaration
const hello = (name, age) => {
	return `${name} is ${age}`
}
console.log(hello('victor', 20))

// clickable function
// writing  a function that prints "You clicked Red!" when the red button is been clicked.
const red = () => {
	document.querySelector('h2').style.color = 'red'
	document.querySelector('h2').innerHTML = 'Red is been selected!'
}

// for the green when clicked will print "Hello! Green Guy!."

function green() {
	document.querySelector('h2').style.color = 'green'
	document.querySelector('h2').innerHTML = 'Green is been selected!'
}
