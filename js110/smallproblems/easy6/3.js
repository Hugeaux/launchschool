function reverseNumber(number) {
  let numString = String(number);
  let numArray = numString.split('').reverse();

  while (Number(numArray[0]) === 0) {
    numArray.shift();
  }

  return numArray.map(element => Number(element)).join('');
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1