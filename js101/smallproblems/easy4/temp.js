function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };

  let stringArray = string.split('');
  let finalNumber = stringArray.map(element => DIGITS[element]);
  let value = 0;

  finalNumber.forEach(element => (value = (10 * value) + element));
  return value;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true