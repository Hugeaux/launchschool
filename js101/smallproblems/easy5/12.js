function afterMidnight(timeString) {
  if (timeString === "00:00" || timeString === "24:00") {
    return 0;
  }
  let timeArray = timeString.split(':');
  let hoursToMinutes = (parseInt(timeArray[0], 10)) * 60;
  let totalMinutes = hoursToMinutes + (parseInt(timeArray[1], 10));
  return totalMinutes;
}

function  beforeMidnight(timeString) {
  if (timeString === "00:00" || timeString === "24:00") {
    return 0;
  }
  let timeArray = timeString.split(':');
  let hoursToMinutes = (parseInt(timeArray[0], 10)) * 60;
  let totalMinutes = hoursToMinutes + (parseInt(timeArray[1], 10));
  return (1440 - totalMinutes);
}

console.log(afterMidnight("00:00") === 0); // true
console.log(beforeMidnight("00:00") === 0); // true
console.log(afterMidnight("12:34") === 754); // true
console.log(beforeMidnight("12:34") === 686); // true
console.log(afterMidnight("24:00") === 0); // true
console.log(beforeMidnight("24:00") === 0); // true