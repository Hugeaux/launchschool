let munstersDescription = "The Munsters are creepy and spooky.";
let index = 0;
let newSentence = '';

while (index < munstersDescription.length) {
  if (munstersDescription[index] === munstersDescription[index].toUpperCase()) {
    newSentence + (munstersDescription[index].toLowerCase());
  } else if (munstersDescription[index] === munstersDescription[index].toLowerCase()) {
    newSentence + (munstersDescription[index].toUpperCase());
  }
  index += 1;
}
console.log(newSentence);


