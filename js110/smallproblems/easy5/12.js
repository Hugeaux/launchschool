const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;

function afterMidnight(time) {
  if (time === "00:00" || time === "24:00") {
    return 0;
  }

  let timeArray = time.split(':');
  let hours = parseInt(timeArray[0] ,10);
  let minutes = parseInt(timeArray[1] ,10);
  return ((hours * MINUTES_PER_HOUR) + minutes);
}

function beforeMidnight(time) {
  if (time === "00:00" || time === "24:00") {
    return 0;
  }

  let timeArray = time.split(':');
  let hours = parseInt(timeArray[0] ,10);
  let minutes = parseInt(timeArray[1] ,10);
  return (((24 - hours) * MINUTES_PER_HOUR) - minutes);
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);