function sequence(number) {
  let result = [];

  for (let idx = 1; idx <= number; idx += 1) {
    result.push(idx);
  }

  return result;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]