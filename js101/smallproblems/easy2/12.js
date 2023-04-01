function negative(number) {
  if (Math.sign(number) > 0) {
    return Math.abs(number) * -1;
  } else {
    return Number(number);
  }
}

/*function negative(number) {
  return Math.abs(number) * -1;
}*/

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0