/*function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  console.log(factors);
}

factors(-1);
*/
function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number < 0 || number === 0) {
      console.log("Please enter a positive number");
      return;
    } else if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  console.log(factors);
}

factors(-1);