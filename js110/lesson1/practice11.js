let statement = "The Flintstones Rock";

let statementArr = statement.split('');
let countObj = {};

statementArr.forEach(letter => {
  if (Object.keys(countObj).includes(letter)) {
    countObj[letter] += 1;
  } else {
    countObj[letter] = 1;
  }
})

console.log(countObj);

// .split
// forEach
// 
// iterate over string / array 
// 
// if obj already contains element, add to count
// if obj doesn't contain element yet, add key to obj with this element's value