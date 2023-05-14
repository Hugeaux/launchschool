function sequence(number) {
  let numberArray = [];

  for (let idx = 1; idx <= number; idx += 1) {
    numberArray.push(idx);
  }

  console.log(numberArray);
  return numberArray;
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]