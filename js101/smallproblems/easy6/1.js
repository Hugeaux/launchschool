function repeater(words) {
  let wordArray = words.split('').map(word => word + word).join('');
  console.log(wordArray);
  return wordArray;
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('what is up my dude');             // ""