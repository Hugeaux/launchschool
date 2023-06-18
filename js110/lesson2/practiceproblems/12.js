let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let newArr = arr.map(subArr => {
  let filteredArr = subArr.filter(num => num % 3 === 0);
  return filteredArr;
})

console.log(arr);
console.log(newArr);