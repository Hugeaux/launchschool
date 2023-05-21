function reverse(array) {
  let tempArray = [];

  for (let idx = 1; idx <= array.length; idx += 1) {
    tempArray.push(array[array.length - idx]);
  }

  for (let idx = 0; idx < tempArray.length; idx += 1) {
    array[idx] = tempArray[idx];
  }
  return array;
}

let list = [1, 2, 3, 4];
console.log(reverse(list));

let list1 = ["a", "b", "c", "d", "e"];
console.log(reverse(list1));

let list2 = ["abc"];
console.log(reverse(list2));

let list3 = [];
console.log(reverse(list3));