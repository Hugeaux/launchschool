let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let objValues = Object.values(obj);

const VOWELS = ['a', 'e', 'i', 'o', 'u'];

objValues.forEach(arr => {
  arr.forEach(word => {
    let letters = word.split('');

    letters.forEach(letter => {
      if (VOWELS.includes(letter)) {
        console.log(letter);
      }
    })
  })
});