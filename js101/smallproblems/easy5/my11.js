const HOURS_OF_DAY = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"];
const MINUTES_OF_HOUR = ["00"," 01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60"];
const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;

function timeOfDay(number) {
  if (number >= 0) {
    return positiveNumber(number);
  } else {
    return negativeNumber(number);
  }
}

function positiveNumber(number) {
  let hour = number / MINUTES_PER_HOUR;
  let days = hour / HOURS_PER_DAY;
  let hourTime = "";
  let minuteTime = "";
  if (hour > 24) {
    days -= Math.floor(days);
    hourTime = Math.floor(days * 24);
    minuteTime = Math.floor((hour - Math.floor(hour)) * 60);
  } else {
    hourTime = Math.floor(hour);
    minuteTime = Math.round((hour - Math.floor(hour)) * 60);
  }
  console.log(HOURS_OF_DAY[hourTime] + ":" + MINUTES_OF_HOUR[minuteTime]);
  return HOURS_OF_DAY[hourTime] + ":" + MINUTES_OF_HOUR[minuteTime];
}

function negativeNumber(number) {
  let hour = number / MINUTES_PER_HOUR;
  let days = hour / HOURS_PER_DAY;
  let hourTime = "";
  let minuteTime = "";
  if (hour < -24) {
    days -= Math.ceil(days);
    hourTime = Math.abs(Math.floor(24 + (days * 24)));
    minuteTime = Math.floor((hour - Math.floor(hour)) * 60);
  } else {
    hourTime = Math.floor(24 + hour);
    minuteTime = Math.round((hour - Math.floor(hour)) * 60);
  }
  console.log(HOURS_OF_DAY[hourTime] + ":" + MINUTES_OF_HOUR[minuteTime]);
  return HOURS_OF_DAY[hourTime] + ":" + MINUTES_OF_HOUR[minuteTime];
}

console.log(timeOfDay(0) === "00:00"); // true
console.log(timeOfDay(-3) === "23:57"); // true
console.log(timeOfDay(35) === "00:35"); // true
console.log(timeOfDay(-1437) === "00:03"); // true
console.log(timeOfDay(3000) === "02:00"); // true
console.log(timeOfDay(800) === "13:20"); // true
console.log(timeOfDay(-4231) === "01:29"); // true