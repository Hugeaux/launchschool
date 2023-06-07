let advice = "Few things in life are as important as house training your pet dinosaur.";

let adviceArray = advice.split(' ');

for (let idx = 0; idx < adviceArray.length; idx += 1) {
  if (adviceArray[idx] === "important") {
    adviceArray.splice(adviceArray.indexOf('important'), 1, 'urgent');
  }
}

let newAdvice = adviceArray.join(' ');

console.log(newAdvice);