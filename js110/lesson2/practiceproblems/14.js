let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let filteredArr = [];
let objValues = Object.values(obj);

objValues.forEach(obj => {
  if (obj.type === 'fruit') {
    filteredArr.push(obj.colors.map(word => word[0].toUpperCase() + word.slice(1)));
  } else if (obj.type === 'vegetable') {
    filteredArr.push(obj.size.toUpperCase());
  }
});

console.log(objValues);
console.log(filteredArr);