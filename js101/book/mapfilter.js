let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];


function oddLengths(array) {
  let length = array.map(x => x.length);
  let odds = length.filter(element => (element % 2 !== 0));
  return odds;
}


console.log(oddLengths(arr)); // => [1, 5, 3]

