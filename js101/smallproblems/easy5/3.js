function halvsies(arr) {
  let newArray = [[],[]];

  if (arr.length % 2 === 0) {
    let firstHalf = arr.slice(0, (arr.length / 2));
    let secondHalf = arr.slice(arr.length / 2);
    newArray.splice(0, 1, firstHalf);
    newArray.splice(1, 1, secondHalf);
  } else {
    let firstHalf = arr.slice(0, ((arr.length + 1) / 2));
    let secondHalf = arr.slice((arr.length + 1) / 2);
    newArray.splice(0, 1, firstHalf);
    newArray.splice(1, 1, secondHalf);
  }

  return newArray;
}

/*
count length of array
if length % 2 === 0
slice (length / 2)
*/

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]