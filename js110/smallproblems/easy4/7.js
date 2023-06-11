function wordSizes(string) {
  let charObj = {};
  let wordArr = string.replace(/[^A-za-z ]/g, "").split(' ');

  if (wordArr.length === 1) {
    return charObj;
  }

  wordArr.forEach(word => {
    if (Object.keys(charObj).includes(String(word.length))) {
      charObj[String(word.length)] += 1;
    } else {
      charObj[String(word.length)] = 1;
    }
  });

  return charObj;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}