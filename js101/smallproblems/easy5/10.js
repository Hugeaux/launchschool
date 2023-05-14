function average(arr) {
  let sum = 0;

  for (let idx = 0; idx < arr.length; idx += 1) {
    sum += arr[idx];
  }

  return Math.floor(sum / arr.length);

}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40