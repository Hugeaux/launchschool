function centerOf(string) {
  if (string.length % 2 !== 0) {
    let middleChar = Math.round((string.length / 2) - 1);
    console.log(string.charAt(middleChar));
  } else if (string.length % 2 === 0) {
    let firstChar = (string.length / 2) - 1;
    let secondChar = ((string.length / 2));
    console.log(string.charAt(firstChar) + string.charAt(secondChar));
  }
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"

/*
calculate length of the string
if length of string is odd:
  return middle
if length of string is even:
  return two characters


Example
string is 50 characters
50 / 2 = 25
  return characters at index 25, 26

string is 13 characters
13 / 2 = 7.5
  return character at index 8
*/