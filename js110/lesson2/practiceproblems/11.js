let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let finalObj = arr.map(obj => {
  let incrementedObj = {};

  for (let key in obj) {
    incrementedObj[key] = obj[key] + 1;
  }

  return incrementedObj;
});

console.log(finalObj);
console.log(arr);