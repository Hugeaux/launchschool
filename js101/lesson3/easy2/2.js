let numbers = [1, 2, 3, 4, 5];
let sliceNumbers = numbers.slice();
let reverseNumbers = sliceNumbers.reverse();
console.log(reverseNumbers);

let numbersArray = [1, 2, 3, 4, 5];
let copyNumbersArray = [...numbersArray];
let sortNumbers = copyNumbersArray.sort((num1, num2) => num2 - num1);
console.log(sortNumbers);

let thirdArray = [1, 2, 3, 4, 5];
let finalArray = [];
thirdArray.forEach(element => finalArray.push(element));


console.log(numbers);
console.log(numbersArray);
console.log(thirdArray.reverse());