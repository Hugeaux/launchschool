function dms(number) {
  let numArray = number.toString().split(".");
  let degree = numArray[0];

  if (numArray.length === 1) {
    console.log(`${degree} 00'00"`);
    return;
  }

  let minutes = (number - numArray[0]) * 60;
  let minutesArray = minutes.toString().split(".");

  if (minutesArray.length === 1) {
    console.log(`${degree} ${minutes}' 00"`);
    return;
  }

  let seconds = (minutes - minutesArray[0]) * 60;
  let secondsArray = seconds.toString().split(".");

  console.log(`${degree}˚ ${minutesArray[0]}' ${secondsArray[0]}"`);
}


dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"


/*
90°

number - numArray[0]

034773

minutes - minutesArray[0]
*/
