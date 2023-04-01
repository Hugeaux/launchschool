function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length === 5) {
    while (dotSeparatedWords.length > 0) {
      let word = dotSeparatedWords.pop();
      if (!isAnIpNumber(word)) {
        return false;
      }
    }
    return true;
  } else {
    console.log("That is not valid input");
    return false;
  }
}

isDotSeparatedIpAddress("4.5.5.5.5");

/*
231.45.65.78.54
[231, 45, 65, 78, 54]

word = 54
word = 78
word = 65
word = 45
word = 231

if word is not a numeric string between 0 and 255 then break

To do:
return a false condition
handle invalid input: else.g. 4.5.5 or 1.2.3.4.5
*/