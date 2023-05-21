let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

for (let idx = 0; idx < myArray.length; idx += 1) {
  if (myArray[idx] % 2 === 0) {
    console.log(myArray[idx]);
  }
}

