let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };

ages["Marilyn"] = 22;
ages["Spot"] = 237;

let totalAges = Object.assign(ages, additionalAges);
console.log(totalAges);