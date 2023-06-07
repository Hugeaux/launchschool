// Understand the Problem
// 
// input: array containing strings
// output: a new array containing sorted strings
// 
// rules
//   - explicit requirements
//     - sort the new array by number of adjacent consontants
//     - if two string contain the same highest number of adjacent consonants they should reain their original order in relation to each other
//     - consonants are considered adjacent if they are next to each other in the same word or if there is a space between two consonants in adjacent words
//   - implicit requirements
//     - single consonants in a string do not affect sort order in comparison to strings with no consonants. Only adjacent consonants affect sort order.
// 
// questions
// - what if a string contains no consonants?
// - should we sort from highest to lowest number of consonants, or lowest to highest?
// - does the initial array always contain more than one string?
// 
// Examples and test cases
// 
// console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']
// console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
// console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
// console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']
// 
// notes
// - strings should be sorted in descending order
// - it's possible for a string to contain no adjacent consonents (one or zero consonants)
// - it's unclear whether strings can be empty
// - strings can contain a single word
// - case doesn't seem important
// 
// Data structures
// 
// - expected output is a new array
// - we don't need additional data structures outside of the original array and the new array
// 
// Algorithm
// 
// - we need to iterate over the elements in an array
// - for each string element, we need to determine the number of adjacent consonants
//   - adjacent consonant means either:
//       - next to each other
//       - separated by a space
// - keep count of number of adjacent consonants per string
// - if two strings have same number of adjacent consonants, maintain their original order
// - create an array containing the count integers, sorted in descending order
// - push the strings to a new array, in their new order

const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

function sortStringsByConsonants(arr) {
  let sortedStrings = arr.sort((a, b) => countMaxAdjacentConsonants(b) - countMaxAdjacentConsonants(a));

  return sortedStrings;
}

function countMaxAdjacentConsonants(string) {
  let newString = string.split(' ').join('');
  let counter = 0;
  let tempString = '';

  for (let idx = 0; idx <= string.length; idx += 1) {
    if (CONSONANTS.includes(newString[idx])) {
      tempString += newString[idx];
      if (tempString.length > 1 && tempString.length > counter) { counter = tempString.length }
    } else {
      if (tempString.length > 1 && tempString.length > counter) { counter = tempString.length }
        tempString = '';
    }
  }

  return counter;
}

console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']

// console.log(countMaxAdjacentConsonants('month')); // 3
// console.log(countMaxAdjacentConsonants('ccaa')); // 2
// console.log(countMaxAdjacentConsonants('baa')); // 0
// console.log(countMaxAdjacentConsonants('aa')); // 0