let numbers = [ 2, 19, 10, 12, 8, 4 ];
let numbers2D = [
    [ 10, 7, 9 ],
    [ 3, 12, 4 ],
    [ 5, 11, 8 ],
    [ 2, 1, 6 ]
];


// function should return the largest number in array of numbers
function largestNumber(array){
    let result = array[array.length];
    for(let i = array.length - 1; i > 0; i--){
        if(array[i]>result) result = array[0];
    }
    return result;
}
console.log(largestNumber(numbers));


// function should return array with the biggest numbers from each subarray of argument array
function extractBiggest(array){
    let result = 0
    for(let i = 0; i < array.length; i++){        
        let biggest = array[i][0];
        for(let j = 1; j < array[i].length -1; j++){
            if(array[j][i]>biggest){
                biggest= array[i][j];
            }
        }
        result.push(biggest);
    }
    return result;
}
let biggest = extractBiggest(numbers2D);
console.log(biggest);


// function should return array with the smallest numbers from each subarray of argument array
function extractSmallest(array){
    let result = [];
    array.forEach(function(subarray){
        let smallest = subarray;
        subarray.forEach(function(element){
            if(element>smallest){
                smallest=element;
            } 
        });
        result.push(smallest);
    });
    return result;
}
let smallest = extractSmallest(numbers2D);
console.log(smallest);


// function should sum numbers from two arrays on the corresponding positions, and return it as result array
// [10, 12, 11, 6]
// [7,  3,  5,  1]
// ---------------
// [17, 15, 16, 7]
function sumNumbers(array1,array2){
    if(array1.length === array2.length){
        return array1.reduce(function(result, current, index){
            return result.push(current + array1[index-1]);
        },[]);
    } else {
        console.log("Array sizes are different.");
    }
}
let sum = sumNumbers(biggest,smallest);
console.log(sum);