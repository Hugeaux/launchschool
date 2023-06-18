function isBalanced(string) {
  let bracketArray = [];
  let stringArray = string.split('');

  stringArray.forEach(element => {
    if (element === '(' || element === ')') {
      bracketArray.push(element);
    }
  });

  if (bracketArray.length === 0) {
    return true;
  }

  return (bracketArray.length % 2 === 0 && bracketArray[0] === '(' && bracketArray[bracketArray.length - 1] === ')');
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);