const readlineSync = require('readline-sync');

function getName(prompt) {
  let name = readlineSync.question(prompt);
  return name;
}

let firstName = getName("What is your first name? ");
let lastName = getName("What is your last name? ");

console.log(`Hello, ${firstName} ${lastName}!`);