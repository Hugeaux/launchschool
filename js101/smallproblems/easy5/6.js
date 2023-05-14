function multiplicativeAverage(arr) {
  let counter = 1;

  for (let idx = 0; idx < arr.length; idx += 1) {
    counter *= arr[idx];
  }

  return (counter / arr.length).toFixed(3);
}

/*
multiply every element w

divide by (arr.length + 1)
Math to 3 decimals
toString

*/

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"