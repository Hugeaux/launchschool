
let advice = "Few things in life are as important as house training your important pet dinosaur.";
/*
let word = 'important';

let newArray = advice.split(' ');

let indexOfWord = newArray.indexOf(word);

console.log(indexOfWord);

newArray.splice(6, 1, 'urgent');

console.log(newArray);

let newSentence = newArray.join(' ');

console.log(newSentence);
*/
// Shorter solution below:

for (i = 0; i <= advice.length; i += 1) {
  if (advice.includes('important')) {
    advice.replace('important', 'urgent');
  }
}

/*
while (advice.includes('important')) {
  console.log(advice.replace('important', 'urgent'));
}
*/
// => Few things in life are as urgent as house training your pet dinosaur.