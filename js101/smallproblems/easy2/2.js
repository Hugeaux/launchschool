const readlineSync = require('readline-sync');

console.log("What is your name?");
let name = readlineSync.question();

if (name[name.length - 1] === "!") {
  console.log(`HELLO ${name.replace('!', '').toUpperCase()}. WHY ARE WE SCREAMING?`);
}
  else  {
  console.log(`Hello ${name}`);
  }
