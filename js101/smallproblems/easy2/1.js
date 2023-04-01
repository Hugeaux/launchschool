function greetings(arr, obj) {
  let arrGlue = arr.join(' ');
  console.log("Hello, " + arrGlue + "! Nice to have a " + obj.title + ' ' + obj.occupation + ' around.')
  console.log(`Hello, ${arrGlue}! Nice to have a ${obj.title} ${obj.occupation} around.`)
}

let array = ["John", "Q", "Doe"];
let object = { title: "Master", occupation: "Plumber" };

greetings(array, object);