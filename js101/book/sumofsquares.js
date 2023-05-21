function sumOfSquares(arr) {
  let initialValue = 0;
  let sum = arr.reduce(
    (accumulator, currentValue) => accumulator + (currentValue * currentValue),
    initialValue);
  return sum;
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83