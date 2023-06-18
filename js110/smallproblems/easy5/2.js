function union(array1, array2) {
  let combinedArr = array1.concat(array2);
  let finalArr = [];

  combinedArr.forEach(element => {
    if (!finalArr.includes(element)) {
      finalArr.push(element);
    }
  });

  return finalArr;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]