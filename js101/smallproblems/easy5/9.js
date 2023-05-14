function countOccurrences(arr) {
  let occurrences = {};

  for (let idx = 0; idx < arr.length; idx += 1) {
    if (!occurrences[arr[idx]]) {
      occurrences[arr[idx]] = 1;
    } else {
      occurrences[arr[idx]] += 1;
    }
  }

  for (const [key, value] of Object.entries(occurrences)) {
    console.log(`${key} => ${value}`);
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'motorcycle', 'car', 'truck'];
countOccurrences(vehicles);