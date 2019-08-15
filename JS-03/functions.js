
let numbers = [ 4, 8, 3, 7, 20, 5, 15, 2 ];

// Write a `function` that return `sum` of all numbers from array provided as an argument.

function sumAllWithFor(array){

    console.log(array);
    let sum = 0;
    for(let i=0; i<array.length; i++){
        sum = sum + array[i];
    }
   
    return sum;
}

console.log(sumAllWithFor(numbers))

function sumWithReduce(array){

    return array.reduce(function(previous, current){
        console.log(previous);
        console.log(current);
        let result = previous + current;
        console.log(result);
        return result; 
    }); 
}

console.log(sumWithReduce(numbers));

// Write a `function` that return the `smallest` number in array provided as an argument.


// let numbers = [ 4, 8, 3, 7, 20, 5, 15, 2 ];
function smallestNumberWithFor(array){

    let min = array[0];

    for (let i=1;i< array.length; i++){
        if (array[i] < min) {
            min = array[i];
        }
    }

    return min;

}

console.log(smallestNumberWithFor(numbers));

function smallestNumberWithReduce(array){
    return array.reduce(function(previous,current){
        //console.log(previous);
        console.log(current);
        // result = (condition) ? TRUE CASE : FALSE CASE
        // previous = 4
        // current = 8
        // result = 8 < 4 ? 8 : 4;
        // result = 4

        // previous = 4
        // current = 3
        // result = 3 < 4 ? 3 : 4;
        // result = 3;

        // previous = 3
        // current = 7
        // result = 7 < 3 ? 7 : 3;
        // result = 3;
        if(current < previous){
            return current;
        } else {
            return previous;
        }
        //let result = current < previous ? current : previous;
        //console.log(result);
        //return result;
    });
}
console.log(smallestNumberWithReduce(numbers));

// Write a `function` that return the `biggest` number in array provided as an argument.

function biggestNumberReduce(array){

    return array.reduce(function(previous,current){
        let result = previous > current ? previous : current; 
        return result;
    })
}
console.log(biggestNumberReduce(numbers));

// Write a `function` that return the `average` of all numbers in array provided as an argument.

function averageOfNumbers(array){ //THIS ARGUMENTS IS IMPORTANT
    return sumWithReduce(array) / array.length;
}

console.log(averageOfNumbers(numbers));
console.log(averageOfNumbers([2,4,6]))
console.log(averageOfNumbers([1,8]))


// Write a `function` that return the `average of smallest and biggest` numbers in array provided as an argument.


function average(array){
    let min = smallestNumberWithReduce(array);
    let max = biggestNumberReduce(array);

    
    console.log("Minimum is",min);
    console.log("Maximum is",max);
    return (min + max) / 2;
}

console.log(average(numbers));

// Write a `function` that takes array and number as an arguments. Then it should check if array `contain` that number. If yes, return true, otherwise false.

function checkArrayForNumber(array,number){
    for(let i = 0; i< array.length; i++){
        if(array[i]===number){
            return true;
        }
    }
    return false;
}

console.log(checkArrayForNumber(numbers,20));
console.log(checkArrayForNumber(numbers,100));

// let numbers = [ 4, 8, 3, 7, 20, 5, 15, 2 ];
// number = 20
// AFTER FILTER numbers = [20]
// numbers.length = 1
// IF NUMBER.LENGTH === 1 ? TRUE : FALSE // TRUE

//// let numbers = [ 4, 8, 3, 7, 20, 5, 15, 2 ];
// number = 100
// AFTER FILTER numbers = []
// numbers.length = 0
// IF NUMBER.LENGTH === 1 ? TRUE : FALSE // FALSE
function checkNumberFilter(array,number){

    let result = array.filter(function(item){
        return item === number
    })
    console.log(result.length);
    if(result.length===1){
        return true;
    } else {
        return false;
    }
    //return result.length === 1 ? true : false;
}

console.log(checkNumberFilter(numbers,20));
console.log(checkNumberFilter(numbers,100))
console.log(checkNumberFilter(numbers,1000))
console.log(checkNumberFilter(numbers,2))