const CONSONANTS = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

function doubleConsonants(string) {
  let stringArr = string.split('');
  let doubledArr = [];

  for (let idx = 0; idx < stringArr.length; idx += 1) {
    if (CONSONANTS.includes(stringArr[idx])) {
      doubledArr.push(stringArr[idx], stringArr[idx])
    } else {
      doubledArr.push(stringArr[idx]);
    }
  }

  return doubledArr.join('');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""


