let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];
let newArr = [];

arr.map(element => {
  if (typeof element[0] === 'string') {
    newArr.push(element.slice().sort());
  } else if (typeof element[0] === 'number') {
    newArr.push(element.slice().sort((a, b) => a - b));
  }
});

console.log(arr)
console.log(newArr);