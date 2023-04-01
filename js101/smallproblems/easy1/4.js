const readlineSync = require('readline-sync');

console.log("Enter the length of the room in meters:");
let questionOne = readlineSync.prompt();
questionOne = parseInt(questionOne, 10);
console.log("Enter the width of the room in meters:");
let questionTwo = readlineSync.prompt();
questionTwo = parseInt(questionTwo, 10);

function roomArea(length,width) {
  let area = questionOne * questionTwo;
  let feet = area * 10.7639;
  console.log(`The area of the room is ${area} square meters (${feet})`)
}

roomArea();