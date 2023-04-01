function shortLongShort(string1,string2) {
  if (typeof string1 === 'string' && typeof string2 === 'string') {
    if (string1.length < string2.length) {
      console.log(string1 + string2 + string1);
    } else {
      console.log(string2 + string1 + string2);
    }
  } else {
    console.log("Please provide a string.")
  }
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"