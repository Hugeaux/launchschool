function stringToInteger(string)  {
  let numArr = [];

  string.split('').forEach(element => {
    numArr.push(+element);
  });

  let reducedArr = numArr.reduce(function (accum, digit){
    return (accum * 10) + digit
  }, 0);

  console.log(reducedArr);
  return reducedArr;
}

// Understand the problem
// 
// input: string
// output: integer
// 
// rules
//   explicit
//   - no use of built in methods
//   implicit
// 
// Examples and test cases
// 
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
// 
// Data structure