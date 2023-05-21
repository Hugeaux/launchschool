let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let oddArray = myArray.map(x => {
  if (x % 2 === 0) {
    return 'even';
  } else {
    return  'odd';
  }
});

console.log(oddArray);