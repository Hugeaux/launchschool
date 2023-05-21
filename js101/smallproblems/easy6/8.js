function reverseWords(words) {
  let wordArray = words.split(' ');

  for (let idx = 0; idx < wordArray.length; idx += 1) {
    if (wordArray[idx].length >= 5) {
      let tempArray = [wordArray[idx]];
      let reverseWord = tempArray.join('').split('').reverse().join('');
      wordArray.splice(idx, 1, reverseWord);
    }
  }
  return wordArray.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"