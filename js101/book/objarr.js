let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objArray = Object.keys(obj);
let capitalArray = objArray.map(element => element.toUpperCase());

console.log(capitalArray);
console.log(obj);