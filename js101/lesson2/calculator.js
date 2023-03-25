const readline = require('readline-sync');
const messages = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('Choose a language: de or en');
let lang = readline.question();

function finalmessage(message, lang) {
  return messages[lang][message];
}

prompt(finalmessage('welcome', lang));

while (true) {
  // ask for two numbers
  // ask for operation
  // perform operation and display results

  prompt(finalmessage('number1', lang));
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(finalmessage("invalidNumber", lang));
    number1 = readline.question();
  }

  prompt(finalmessage('number2', lang));
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(messages["invalidNumber"]);
    number2 = readline.question();
  }

  prompt(finalmessage("operation", lang));
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(finalmessage("must", lang));
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(finalmessage("result", lang) + output);

  prompt(finalmessage("again", lang));
  let answer = readline.question();

  if (answer[0].toLowerCase() !== 'y') break;
}