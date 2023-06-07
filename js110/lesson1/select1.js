let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(obj) {
  let fruitObj = {}

  for (let item in obj) {
    if (obj[item] === 'Fruit') {
      fruitObj[item] = 'Fruit';
    }
  }

  return fruitObj;
}

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }