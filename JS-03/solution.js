let numbers = [ 2, 8, 3, 7, 20, 5, 15, 1, 2 ];


// Write a `function` that return `sum` of all numbers from array provided as an argument.

let sumNumbers = array => array.reduce((p,c)=>p+c,0);
console.log(sumNumbers(numbers));

// Write a `function` that return the `smallest` number in array provided as an argument.

let smallestReduce = array => array.reduce((p,c)=>p<c?p:c);
let smallestSort = array => array.sort((a,b)=>a-b)[0];
console.log(smallestReduce(numbers));
console.log(smallestSort(numbers));

// Write a `function` that return the `biggest` number in array provided as an argument.
let biggestReduce = array => array.reduce((p,c)=>p>c?p:c);
let biggestSort = array => array.sort((a,b)=>b-a)[0];
console.log(biggestReduce(numbers));
console.log(biggestSort(numbers));

// Write a `function` that return the `average` of all numbers in array provided as an argument.
let average = array => sumNumbers(array)/array.length;
console.log(average(numbers));

// Write a `function` that return the `average of smallest and biggest` numbers in array provided as an argument.
let averageSB = (array) => (smallestReduce(array) + biggestReduce(array)) / 2;
console.log(averageSB(numbers))

// Write a `function` that takes array and number as an arguments. Then it should check if array `contain` that number. If yes, return true, otherwise false.
let containNumber = (array,number,min) => array.filter(a=>a===number).length>min-1;
console.log(containNumber(numbers,2,1));
console.log(containNumber(numbers,2000,1));
console.log(containNumber(numbers,20,1));

// Write a `function` that checks if there are `duplicated` values in an array provides as an argument. If yes, return true, otherwise false.
console.log(containNumber(numbers,2,2));
console.log(containNumber(numbers,20,2));