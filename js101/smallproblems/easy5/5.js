function interleave(firstArray, secondArray) {
  let newArray = [];

  for (let idx = 0; idx < firstArray.length; idx += 1) {
    newArray.push(firstArray[idx], secondArray[idx]);
  }

  console.log(newArray);
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]