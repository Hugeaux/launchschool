const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;

function timeOfDay(number) {
  if (number === 0) {
    return "00:00";
  }

  let hours = number / MINUTES_PER_HOUR;
  let days  = hours / HOURS_PER_DAY;

  if (Math.sign(number) === 1) {
    if (number < 60) {
      return `00:${padZero(number)}`;
    } else if (number >= 60) {

    }
  }

  if (Math.sign(number) === -1) {
    if (number < 60) {
      return `23:${padZero(number)}`
    } 
  }
}

function padZero(number) {
  if (String(number).length < 2) {
    console.log(number);
    return "0" + number;
  } else {
    return number;
  }
}

console.log(timeOfDay(0));
console.log(timeOfDay(-3));
console.log(timeOfDay(35));
console.log(timeOfDay(-1437));
console.log(timeOfDay(3000));
console.log(timeOfDay(800));
console.log(timeOfDay(-4231));