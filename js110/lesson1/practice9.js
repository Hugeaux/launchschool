let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let ageValues = Object.values(ages);
let totalAge = 0;

for (let idx = 0; idx < ageValues.length; idx += 1) {
  totalAge += ageValues[idx];
}

console.log(totalAge);