1. The return value here is an array: [1, 2, 3]. This is because the filter method
examines the truthiness of the callback's return value. If the callback's return value is truthy, the element is selected.
In this case, the return value is truthy on all iterations.

2. The return value of `map` here is an array: [undefined, undefined, undefined]. `map` considers the return value of its callback function.
Since the callback function doesn't explicitly return anything, the implicit return is `undefined`.

3. The return value of `map` here is an array: [1, 4, 9]. The callback function is an arrow function that returns the value of num * num for each element of the original array. 

4. This statement returns 1. The pop method removes the last element from the array and returns it. The length property then returns the length of this single element. WRONG. It returns 11 (the length of the last element, 'caterpillar')

5. The callback return value is true for every iteration: 2, 4, 6. The return value of `every` in this code is `true`

6. The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array. 

It's destructive. We can find out like this:

let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5);
console.log(arr);

7. The return value of `map` in this code is a new array: ['bear']. `map` uses the return value of its callback function to add to the new array. In this case, only 'bear' has a length of more than 3. WRONG: it's [undefined, 'bear'].

8. 