function halvsies(array) {
  let result = [[],[]];

  if (array.length === 0) {
    return result;
  } else if (array.length === 1) {
    return [[array[0]],[]];
  }

  if (array.length % 2 === 1) {
    result[0].push(array.slice(0, Math.min(array.length / 2) + 1));
    result[1].push(array.slice(Math.ceil(array.length / 2) + 1));
  } else if (array.length % 2 === 0) {
    result[0].push(array.slice(0, (array.length / 2)));
    result[1].push(array.slice((array.length / 2)));
  }


  return result;
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]