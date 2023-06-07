1. No. This will simply mean that index 3, 4, 5 are empty items.

Bonus: numbers[4] = undefined;

2. 

str1.endsWith('!');
str2.endsWith('!');

3.

console.log(ages.hasOwnProperty('Spot'));

4. 
let munstersDescription = "the Munsters are CREEPY and Spooky.";
let munstersArray = munstersDescription.toLowerCase().split(' ');

munstersArray[0] = 'The';

let newMunsters = munstersArray.join(' ');

console.log(newMunsters);

5. 

true
false

6. 
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };

let newAges = Object.assign(ages, additionalAges);

7.

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

str1.includes('Dino');
str2.includes('Dino');

8. 

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

flintstones.push('Dino');

9. 
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino", "Hoppy");

10. 

let advice = "Few things in life are as important as house training your pet dinosaur.";

advice.slice(0, advice.indexOf('house'));

