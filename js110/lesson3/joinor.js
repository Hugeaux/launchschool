function joinOr(arr, separator = ', ') {
  if (arr.length === 0) {
    return '';
  } else if (arr.length === 1){
    return `${arr[0]}`;
  } else if (arr.length === 2) {
    return `${arr[0]} or ${arr[1]}`;
  } else {
    return `${arr.join(separator).slice(0, -1).trimEnd()} or ${arr[arr.length - 1]}`;
  }
}

console.log(joinOr([1, 2, 3, 4]));               // => "1, 2, 3 or 4"
console.log(joinOr([1, 2, 3], '; '));         // => "1; 2; or 3"
console.log(joinOr([1, 2, 3], ', ', 'and'));  // => "1, 2, and 3"
console.log(joinOr([]));                      // => ""
console.log(joinOr([5]));                     // => "5"
console.log(joinOr([1, 2]));                  // => "1 or 2"