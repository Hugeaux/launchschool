const DEGREES_PER_MINUTE = 60;
const SECONDS_PER_MINUTE = 60;

function dms(number) {
  if (number === parseInt(number)) {
    return `${number}°00'00"`;
  } else {
    let degrees = Math.floor(number);
    let remainingMinutes = number - degrees;
    let minutes = Math.floor(remainingMinutes * DEGREES_PER_MINUTE);
    let remainingSeconds = (remainingMinutes * DEGREES_PER_MINUTE) - minutes;
    let seconds = Math.floor(remainingSeconds * SECONDS_PER_MINUTE);
    return `${degrees}°${padZero(minutes)}'${padZero(seconds)}"`;
  }
}

function padZero(number) {
  let numString = String(number);
  return numString.length < 2 ? ('0' + numString) : numString;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"