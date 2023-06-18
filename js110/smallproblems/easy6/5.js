function swapName(name) {
  let nameArr = name.split(' ');
  return `${nameArr[1]}, ${nameArr[0]}`;
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"