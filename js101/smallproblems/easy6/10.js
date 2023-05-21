function isBalanced(string) {
  let array = string.split('');
  let parenthesesArray = [];

  for (let idx = 0; idx < array.length; idx += 1) {
    if (array[idx] === "(") {
      parenthesesArray.push("(");
    } else if (array[idx] === ")") {
      parenthesesArray.push(")");
    } else {
      continue;
    }
  }

  return ((parenthesesArray.length % 2 === 0 && parenthesesArray[0] === '(' && parenthesesArray[parenthesesArray.length - 1] === ')') || parenthesesArray.length === 0);
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);