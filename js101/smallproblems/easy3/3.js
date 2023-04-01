function stringy(num) {
  let string = "1";
  let number = Number(num);

  for (let idx = 0; idx < number - 1; idx += 1) {
    if (string[idx] === "1") {
      string += "0";
    } else if (string[idx] === "0") {
      string += "1";
    }
  }
  console.log(string);
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"


/*

emptyString = "";


*/


/*

  while (index <= num) {
    if (string[index] === 0) {
      string.concat("1");
    } else if (string[index] === 1) {
      string.concat("0");
    }
    index += 1;
  }
  console.log(string);
}
*/