function allMatches(array, reg) {
  let regArray = [];

  for (let idx = 0; idx < array.length; idx += 1) {
    if (reg.test(array[idx])) {
      regArray.push(array[idx]);
    }
  }

  return regArray;
}

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']