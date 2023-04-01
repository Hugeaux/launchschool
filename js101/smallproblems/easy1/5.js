const readlineSync = require('readline-sync');

console.log("What is the bill?");
let billAmount = readlineSync.prompt();
billAmount = parseInt(billAmount, 10);

console.log("What is the tip percentage?");
let tipPercentage = readlineSync.prompt();
tipPercentage = parseInt(tipPercentage, 10);

function tipAmount(bill,tip) {
  let tipTotal = (billAmount / 100) * tipPercentage;
  console.log(`The tip is $${tipTotal}`);
  console.log("The total is $" + (billAmount + tipTotal));
}

tipAmount();