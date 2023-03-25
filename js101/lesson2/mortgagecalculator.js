const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number)) || number < 0;
}

prompt('Welcome to the Mortgage Calculator!');

while (true) {
  prompt('What is the amount you wish to borrow?');
  let loanAmount = readline.question();

  while (invalidNumber(loanAmount)) {
    prompt("Please input a number.");
    loanAmount = readline.question();
  }

  prompt("What's the APR for this loan?");
  let interestRate = readline.question();

  while (invalidNumber(interestRate)) {
    prompt("Please input the APR as a number (e.g. 5)");
    interestRate = readline.question();
  }

  prompt('What is the duration of the loan (in years)?');
  let loanDurationYears = readline.question();

  while (invalidNumber(loanDurationYears)) {
    prompt("Please input a number.");
    loanDurationYears = readline.question();
  }

  let monthlyInterest = ((interestRate / 100) / 12);
  let loanDurationMonths = (loanDurationYears * 12);

  let paymentAmount = loanAmount * (monthlyInterest /
  (1 - Math.pow((1 + monthlyInterest), (-loanDurationMonths))));

  let finalPaymentAmount = parseFloat(paymentAmount).toFixed(2);

  prompt(`Your monthly payment for this loan will be $${finalPaymentAmount}`);

  prompt("Do you want to perform another calculation? y/n");
  let answer = readline.question();

  if (answer[0].toLowerCase() !== 'y') break;
}