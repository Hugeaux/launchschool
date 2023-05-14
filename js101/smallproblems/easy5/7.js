function multiplyList(firstArray, secondArray) {
  let newArray = [];

  for (let idx = 0; idx < firstArray.length; idx += 1) {
    newArray.push(firstArray[idx] * secondArray[idx]);
  }

  console.log(newArray);
}

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]
multiplyList([3, 5, 7, 9], [9, 10, 11, 24]);