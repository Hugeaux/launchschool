function swap(string) {
  let stringArr = string.split(' ');
  let newArr = [];

  if (string.length === 1) {
    return string;
  }

  stringArr.forEach(element => {
    newArr.push((element[element.length - 1] + element.slice(1, (element.length - 1)) + element[0]));
  });

  return newArr.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"