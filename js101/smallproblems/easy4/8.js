function swap(words) {
  let wordsArray = words.split(' ');
  let newArray = [];

  for (let idx = 0; idx < wordsArray.length; idx += 1) {
    let wordSize = wordsArray[idx].length;
    let firstLetter = wordsArray[idx][0];
    let lastLetter = wordsArray[idx].slice(-1);

    if (wordSize === 1) {
      newArray.push(wordsArray[idx]);
    }

    if (wordSize > 1) {
      newArray.push(lastLetter + wordsArray[idx].slice(1, -1) + firstLetter);
    }
  }
  return newArray.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"


/*
split string into array

iterate over array

if word is one letter, return letter

if word is more than one letter, take first and last letter of word
word[0] and word[-1]

swap them around
lastLetter + wordsArray[idx].slice(1, -1) + firstLetter
*/