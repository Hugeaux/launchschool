function century(year) {
  let centuryString = year.toString();
  let firstHalf = centuryString.substring(0, (centuryString.length - 2));
  let firstHalfNumber = Number(firstHalf);
  if (year <= 100) {
    console.log("1st");
    return;
  }

  if (year[-1] !== 0) {
    firstHalfNumber += 1;
  } else {
    firstHalfNumber = firstHalfNumber;
  }
  
  if (firstHalfNumber >= 11 && firstHalfNumber <= 19) {
    console.log(firstHalfNumber.toString() + "th");
  } else if (firstHalfNumber[-1] === 1) {
    console.log(firstHalfNumber.toString() + "st");
  } else if (firstHalfNumber[-1] === 2) {
    console.log(firstHalfNumber.toString() + "nd");
  } else if (firstHalfNumber[-1] === 3) {
    console.log(firstHalfNumber.toString() + "rd");
  } else {
    console.log(firstHalfNumber.toString() + "th");
  }
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

/*
let characters = number of characters in year


return first (characters -2) characters

if last character of year is not 1, take first two numbers
if second number is 1, append "st"
else if second number is 2, append "nd"
else if second number is 3, append "rd"
else append "th"


let firstHalf = return first (characters -2) characters: 11
if last char of year >= 1, firstHalf += 1

1127
4 chars
"1127"
11
12

*/