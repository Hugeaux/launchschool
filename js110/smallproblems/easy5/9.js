function countOccurrences(array) {
  let count = [];

  array.forEach(element => {
    if (!Object.keys(count).includes(element)) {
      count[element] = 1;
    } else if (Object.keys(count).includes(element)) {
      count[element] += 1;
    }
  });

  for (let vehicle in count) {
    console.log(`${vehicle} => ${count[vehicle]}`);
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);