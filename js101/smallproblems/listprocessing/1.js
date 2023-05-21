function sum(number) {
  let numberString = String(number);
  let numberArray = numberString.split('');
  console.log(numberArray);
  let map1 = numberArray.map(x => Number(x) + (Number(x) + 1));
  console.log(map1);
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45