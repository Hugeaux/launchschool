const CONSONANTS = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];

function doubleConsonants(words) {
  let wordArray = words.split('');
  let newArray = [];

  for (let idx = 0; idx < wordArray.length; idx += 1) {
    if (CONSONANTS.includes(wordArray[idx].toLowerCase())) {
      newArray.push(wordArray[idx], wordArray[idx]);
    } else {
      newArray.push(wordArray[idx]);
    }
  }
  console.log(newArray.join(''));
  return newArray.join('');
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""