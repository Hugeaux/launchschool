let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

// [{b: [2, 4, 6], c: [3, 6], d: [4]}]



let finalArr = arr.filter(obj => {

  for (let key in obj) {
    obj[key].forEach(element => {
      if (element % 2 === 0) {
        return obj;
      }
    });
  }

  return 
});

console.log(finalArr);

// SOLUTION

arr.filter(obj => {
  return Object.values(obj).every(subArr => {
    return subArr.every(num => num % 2 === 0);
  });
});

// => [ { e: [ 8 ], f: [ 6, 10 ] } ]