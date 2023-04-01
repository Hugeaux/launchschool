const readlineSync = require('readline-sync');

console.log("Enter a noun:");
let noun = readlineSync.question();

console.log("Enter a verb:");
let verb = readlineSync.question();

console.log("Enter an adjective:");
let adjective = readlineSync.question();

console.log("Enter an adverb:");
let adverb = readlineSync.question();

console.log(`That's crazy, I didn't know your ${noun} could ${verb} so ${adverb}. How very ${adjective}.`);
