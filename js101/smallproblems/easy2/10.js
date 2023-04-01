const readlineSync = require('readline-sync');

console.log("What is your age?");
let age = Number(readlineSync.question());

console.log("At what age would you like to retire?");
let retirementAge = Number(readlineSync.question());

let currentYear = new Date().getFullYear();
let yearsToWork = retirementAge - age;
let retirementYear = currentYear + yearsToWork;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You have only ${yearsToWork} years of work to go!`);
