function interleave(array1, array2) {
  let combinedArray = [];

  for (let idx = 0; idx < array1.length; idx += 1) {
    combinedArray.push(array1[idx]);
    combinedArray.push(array2[idx]);
  }

  return combinedArray;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]