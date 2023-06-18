function stringToInteger(string)  {
  let numArr = [];

  string.split('').forEach(element => {
    numArr.push(+element);
  });

  let reducedArr = numArr.reduce(function (accum, digit){
    return (accum * 10) + digit
  }, 0);

  return reducedArr;
}

function stringToSignedInteger(string) {
  if (string[0] === "-") {
    return (stringToInteger(string.slice(1)) * -1);
  } else if (string[0] === "+") {
    return stringToInteger(string.slice(1));
  } else {
    return stringToInteger(string);
  }
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true