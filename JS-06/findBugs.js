let numbers = [ 2, 19, 10, 12, 8, 4 ];

// function should return the largest number in array of numbers
function largestNumber(array){
    console.log(array.length);

    let largest = array[array.length-1];

    console.log(largest);

    for(let i = (array.length - 2); i >= 2; i--){
        console.log("Current element",array[i]);
        console.log("Largest before checking",largest);
        if(array[i]>largest) largest = array[i];
        console.log("Largest after chekcing",largest);
    }

    return largest;
}
console.log(largestNumber(numbers));


let numbers2D = [
    [ 10, 7, 9 ],
    [ 3, 12, 4 ],
    [ 5, 11, 8 ],
    [ 2, 1, 6 ]
];
// [10, 12, 11, 6]


// function should return array with the biggest numbers from each subarray of argument array
function extractBiggest(array){
    let result = [];

    for(let i = 0; i < array.length; i++){        
        console.log("Result before checking",result)
        let biggest = array[i][0];

        for(let j = 1; j < array[i].length; j++){
            if(array[i][j]>biggest){
                biggest= array[i][j];
            }
        }
        result.push(biggest);
        console.log("Result after checking",result)
    }

    return result;
}
let biggest = extractBiggest(numbers2D);
console.log(biggest);


// function should return array with the smallest numbers from each subarray of argument array
function extractSmallest(array){
    let result = [];

    array.forEach(function(subarray){
        console.log(subarray);
        let smallest = subarray[0];
        console.log(smallest);

        subarray.forEach(function(element){
            if(element<smallest){
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
            console.log(result)
            console.log(index)
            result.push(current + array2[index]);
            console.log(result)
            return result;
        },[]);

    } else {
        console.log("Array sizes are different.");
    }
}
let sum = sumNumbers(biggest,smallest);
console.log(sum);