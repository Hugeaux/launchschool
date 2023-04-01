function triangle(num) {
  let sentence = "*";

  for (let idx = 0; idx < num; idx += 1) {
    console.log(sentence.padStart((num), " "));
    sentence += "*";
  }
}

triangle(5);
triangle(9);

/*
n number of lines
every additional line gets an additional star
string length needs to be n for every line

every additional line, one additional *


perhaps a for loop? if index <= n, console.log
*/