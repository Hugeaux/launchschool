function wordSizes(words) {
  let wordsArray = words.split(' ');
  let count = {};
  let regex = /[a-zA-Z]/g;

  for (let idx = 0; idx < wordsArray.length; idx += 1) {
    let cleanedWord = wordsArray[idx].match(regex);
    let wordSize = cleanedWord.length;
    if (wordSize === 0) {
      continue;
    }

    if (!count[wordSize]) {
      count[wordSize] = 0;
    }
    count[wordSize] += 1;
  }

  return count;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}


/*
wordsArray[idx]
let res = /^[a-zA-Z]+$/
*/