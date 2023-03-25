function utf16Value(string) {
  let charValue = 0;

  for (let i = 0; i < string.length; i += 1) {
    charValue += string.charCodeAt(i);
  }  

  return charValue;
}

utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0
  