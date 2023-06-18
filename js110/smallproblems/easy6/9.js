function reverse(array) {
  let reverseArray = [];

  for (let idx = 1; idx <= array.length; idx += 1) {
    reverseArray.push(array[array.length - idx]);
  }

  for (let idx = 0; idx < array.length; idx += 1) {
    array.splice(idx, 1, reverseArray[idx]);
  }

  return array;
}

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true