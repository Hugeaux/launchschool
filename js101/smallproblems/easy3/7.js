function checkDouble(num) {
  let stringNum = num.toString();
  let stringLength = stringNum.length;
  let stringHalves = stringLength / 2;
  if (stringNum.substring(0, stringHalves) === stringNum.substring(stringHalves)) {
    console.log(num);
    return true;
  } else {
    return false;
  }
}

function twice(num) {
  if (checkDouble(num) === true) {
    return num;
  } else {
    console.log(num * 2);
  }
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676

/*
if ()

how to check for double numbers:
it must be an even number
left side must === right side 

num to string
number of characters in string
split the string in two equal parts
if part one === part two
return true

103103
stringNum = "103103"
stringLength = 6
stringHalves = 3
if stringNum.substring(0,3) === stringNum.substring(3);
103 103
*/