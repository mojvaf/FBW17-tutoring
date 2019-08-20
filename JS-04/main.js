let numbers = [ 2, 10, 5, 3, 3, 8, 2, 10, 3, 8, 2 ];

let people = [
    { name : "Sylvester Stallon", age : 60 },
    { name : "Arnold Schwarzeneger", age : 65 },
    { name : "Justin Bieber", age:-10 },
    { name : "Justin Timberlake", age: 35 },
    { name : "Sean Penn", age: 50 },
    { name : "Sean Connery", age: 75 }
];

// WRITE A FUNCTION THAT TAKES TWO ARGUMENTS, ARRAY AND NUMBER, IT SHOULD COUNT OCCURRENCES OF THAT NUMBER IN PROVIDED ARRAY AND RETURN IT

// * FOR
function countNumber(arrayOfNumbers,number){
    let result = 0;
    for(let i = 0; i < arrayOfNumbers.length; i++){
        if(arrayOfNumbers[i]===number){
            result++;
        }
    }
    return result;
}
console.log(countNumber(numbers,2));

let result = countNumber(numbers,3);
console.log(result);

// * FILTER

function countWithFilter(arrayOfNumbers,number){
    
    console.log("before filtering",arrayOfNumbers);

    let filteredArray = arrayOfNumbers.filter(
        function(currentNumber){
            console.log(currentNumber)
            return currentNumber===10
        }   
    );

    console.log("After filtering",filteredArray);

    return filteredArray.length;

}
console.log(countWithFilter(numbers,10));

// * REDUCE



// WRITE A FUNCTION THAT SORTS OBJECTS IN ARRAY BY AGE / ASCENDING


// WRITE A FUNCTION THAT SORTS OBJECTS IN ARRAY ALPHABETICALLY BY NAME / DESCENDING


// WRITE A FUNCTION THAT FILTERS THE NAMES HAVING SOME LETTER


// FOR AND REDUCE // HOW IS IT SIMILAR?
