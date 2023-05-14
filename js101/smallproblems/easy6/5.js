function swapName(name) {
  let completeName = name.split(' ');
  return completeName[1] + ", " + completeName[0];
}

swapName('Joe Roberts');    // "Roberts, Joe"