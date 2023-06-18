function reverseWords(string) {
  let stringArr = string.split(' ');
  let resultArr = [];

  stringArr.forEach(element => {
    if (element.length >= 5) {
      resultArr.push(element.split('').reverse().join(''));
    } else {
      resultArr.push(element);
    }
  });

  return resultArr.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"