const readlineSync = require('readline-sync');

console.log("==> Enter the first number:");
let num1 = Number(readlineSync.prompt());

console.log("==> Enter the second number:");
let num2 = Number(readlineSync.prompt());

let plus = num1 + num2;
let minus = num1 - num2;
let multi = num1 * num2;
let divi = num1 / num2;
let remain = num1 % num2;
let power = num1 ** num2;

console.log("==>", num1, " + ", num2, " = ", plus)
console.log("==>", num1, " - ", num2, " = ", minus)
console.log("==>", num1, " * ", num2, " = ", multi)
console.log("==>", num1, " / ", num2, " = ", divi)
console.log("==>", num1, " % ", num2, " = ", remain)
console.log("==>", num1, " ** ", num2, " = ", power)

