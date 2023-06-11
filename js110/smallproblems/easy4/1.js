let readlineSync = require('readline-sync');

let numArray = [];

console.log("Enter the first number: ");
let firstNumber = readlineSync.prompt();
numArray.push(firstNumber);

console.log("Enter the second number: ");
let secondNumber = readlineSync.prompt();
numArray.push(secondNumber);

console.log("Enter the third number: ");
let thirdNumber = readlineSync.prompt();
numArray.push(thirdNumber);

console.log("Enter the fourth number: ");
let fourthNumber = readlineSync.prompt();
numArray.push(fourthNumber);

console.log("Enter the fifth number: ");
let fifthNumber = readlineSync.prompt();
numArray.push(fifthNumber);

console.log("Enter the last number: ");
let lastNumber = readlineSync.prompt();

if (numArray.includes(lastNumber)) {
  console.log(`The number ${lastNumber} appears in ${numArray}.`)
} else {
  console.log(`The number ${lastNumber} dooes not appear in ${numArray}.`)
}