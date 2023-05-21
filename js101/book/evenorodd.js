function evenOrOdd(number) {
  if (number !== parseInt(number)) {
    console.log('Please enter an integer');
    return;
  }
  return number % 2 === 0 ? 'even' : 'odd';
}

console.log(evenOrOdd(5));
console.log(evenOrOdd('test'));