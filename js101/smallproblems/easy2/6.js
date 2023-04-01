function penultimate(words) {
  let arr = words.split(' ');
  let selectedWord = arr[arr.length - 2];
  return selectedWord;
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true