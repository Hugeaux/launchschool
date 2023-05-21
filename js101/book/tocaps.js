function toCaps(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}

console.log(toCaps('hello world'));
console.log(toCaps('goodbye'));
