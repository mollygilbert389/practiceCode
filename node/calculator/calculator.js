var input = process.argv;

var operator = input[2]
var num1 = input[3]
var num2 = input[4]

if (operator == "add") {
    console.log(parseFloat(num1) + parseFloat(num2))
} 
if (operator == "subtract") {
    console.log(parseFloat(num1) - parseFloat(num2))
}
if (operator == "exp") {
    console.log(parseFloat(num1) ** parseFloat(num2))
}
if (operator == "divide") {
    console.log(parseFloat(num1) / parseFloat(num2))
}
if (operator == "multiply") {
    console.log(parseFloat(num1) * parseFloat(num2))
}
if (operator == "remainder") {
    console.log(parseFloat(num1) % parseFloat(num2))
}
