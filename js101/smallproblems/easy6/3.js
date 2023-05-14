function reverseNumber(number) {
  let reverseArray = number.toString().split('').reverse();

  while (reverseArray[0] === '0') {
    reverseArray.shift();
  }

  let reverseNumber = reverseArray.join('');
  return reverseNumber;
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1