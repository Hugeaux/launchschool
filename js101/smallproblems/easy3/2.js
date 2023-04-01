function logInBox(text) {
  let string = "";
  console.log("+", string.padStart(text.length + 2, "-"),"+");
  console.log("|", string.padStart(text.length + 2, " "),"|");
  console.log("| ", text, " |");
  console.log("|", string.padStart(text.length + 2, " "),"|");
  console.log("+", string.padStart(text.length + 2, "-"),"+");
}

logInBox('To boldly go where no one has gone before.');