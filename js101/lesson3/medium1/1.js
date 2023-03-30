let sentence = "The Flintstones Rock!";

for (let count = 0; count <= 10; count += 1) {
  console.log(sentence.padStart(count + sentence.length));
}