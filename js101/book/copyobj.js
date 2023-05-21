function copyObj(obj, arr = Object.keys(obj)) {
  let finalObj = {};

  for (let idx = 0; idx < arr.length; idx += 1) {
    finalObj[arr[idx]] = obj[arr[idx]];
  }

  return finalObj;
}

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }