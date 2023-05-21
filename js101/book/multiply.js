const readlineSync = require('readline-sync');

let firstNumber = readlineSync.question("Enter the first number: ");
let secondNumber = readlineSync.question("Enter the second number: ");
function multiply(left, right) {
  return Number(left) * Number(right);
}

console.log(`${firstNumber} * ${secondNumber} = ${multiply(firstNumber, secondNumber)}`);