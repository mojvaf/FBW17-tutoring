// FUNCTION ARGUMENTS
let numbersEven = [2, 4, 6, 8, 10];
let numbersOdd = [1, 3, 5, 9, 11];

function countSum(arrayOfNumbers){
    console.log("This is our argument",arrayOfNumbers);
    let count = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        count += arrayOfNumbers[i];
    }
    return count;
}

let sum1 = countSum(numbersEven);
console.log(sum1);

let sum2 = countSum(numbersOdd);
console.log(sum2);


//SORTING NUMBERS ASCENDING
console.log([2,10,5,3,8,6].sort(function(a,b){
    console.log(a);
    console.log(b);
    return a-b;
}))

//MAP - IS GOOD WHEN YOU WANT TO MODIFY VALUE OF AN ARRAY ITEMS
//FILTER - IS FILTERING THE VALUES
//FOREACH - IS GOOD WHEN YOU JUST TO ITERATE THROUGH ARRAY
//REDUCE - IS GOOD WHEN YOU WANT TO EXTRACT ONE VALUE


//EXAMPLE OF ARRAY METHOD
let array = ["Something","Something else"];
array = array.concat(["Karol"]);
console.log(array);