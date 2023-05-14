function union(firstArray, secondArray) {
  let newArray = [];

  for (let idx = 0; idx < firstArray.length; idx += 1) {
    newArray.push(firstArray[idx], secondArray[idx]);
  }

  let finalArray = [...new Set(newArray.sort())];
  return finalArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));

/*
iterate over arrays
if character in secondArray === firstArray, continue
else, push character to
*/