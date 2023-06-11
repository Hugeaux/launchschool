function arrToObj(arr) {
  let arrKeyValues = Object.entries(arr);
  let arrObj = {};

  arrKeyValues.forEach(keyValue => {
    let [ key, value ] = keyValue;

    arrObj[value] = Number(key);
  })

  return arrObj
}

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

console.log(arrToObj(flintstones));