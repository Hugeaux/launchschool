const readlineSync = require('readline-sync');

let age = readlineSync.question("How old are you? ");
age = parseInt(age, 10);

console.log(`You are ${age} years old.`);

for (let idx = 10; idx <= 40; idx += 10) {
  console.log(`In ${idx} years, you will be ${age + idx} years old.`);
}

/*

console.log(`You are ${age} years old.`);
console.log(`In 10 years, you will be ${age + 10} years old.`);
console.log(`In 20 years, you will be ${age + 20} years old.`);
console.log(`In 30 years, you will be ${age + 30} years old.`);
console.log(`In 40 years, you will be ${age + 40} years old.`);

*/