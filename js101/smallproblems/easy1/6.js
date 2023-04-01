function computeSum(targetNum) {
  let total = 0;

  for (let num = 1; num <= targetNum; num += 1) {
    total += num;
  }

  return total;
}

function computeProduct(targetNum) {
  let total = 1;

  for (let num = 1; num <= targetNum; num += 1) {
    total *= num;
  }

  return total;
}

let readlineSync = require('readline-sync');

console.log("Please enter an integer greater than 0:");
let enteredInteger = parseInt(readlineSync.prompt(), 10);

console.log('Enter "s" to compute the sum, or "p" to compute the product.');
let productOrSum = readlineSync.prompt();

  if (productOrSum === 'p') {
    let sum = computeProduct(enteredInteger);
    console.log(`The product of the integers between 1 and ${enteredInteger} is ${sum}`);
  } else if (productOrSum === 's') {
    let product = computeSums(enteredInteger);
    console.log(`The sum of the integers between 1 and ${enteredInteger} is ${product}`);
  } else {
    console.log("Please type a p or an s!")
  }