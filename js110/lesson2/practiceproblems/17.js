function generateUUID() {
  return `${generateRandomString(8)}-${generateRandomString(4)}-${generateRandomString(4)}-${generateRandomString(4)}-${generateRandomString(12)}`
}

let characters = ['a','b','c','d','e','f','0','1','2','3','4','5','6','6','7','8','9'];

function generateRandomString(num) {
  let randomString = '';

  for (let idx = 0; idx < num; idx += 1){
    randomString += characters[Math.floor(Math.random() * 17)];
  }

  return randomString;
}

console.log(generateUUID());