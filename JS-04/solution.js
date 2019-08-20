let numbers = [ 2, 10, 5, 3, 3, 8, 2, 10, 3, 8]
let people = [
    { name : "Sylvester Stallon", age : 60 },
    { name : "Arnold Schwarzeneger", age : 65 },
    { name : "Justin Bieber", age:-10 },
    { name : "Justin Timberlake", age: 35 },
    { name : "Sean Penn", age: 50 },
    { name : "Sean Connery", age: 75 }
];

// WRITE A FUNCTION THAT TAKES TWO ARGUMENTS, ARRAY AND NUMBER, IT SHOULD COUNT OCCURRENCES OF THAT NUMBER IN PROVIDED ARRAY AND RETURN IT

// * FOR / FOREACH
let countWithFor = function(array, number){
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i]===number)
            count++;
        
    }
    return count;
}
console.log(countWithFor(numbers,8));
console.log(countWithFor(numbers,3));
console.log(countWithFor(numbers,5));


// * FILTER
let countWithFilter = function(array,number){
    return array.filter(function(item){
        return item === number;
    }).length;
}
console.log(countWithFilter(numbers,8));
console.log(countWithFilter(numbers,3));
console.log(countWithFilter(numbers,5));


// * REDUCE
let countWithReduce = function(array,number){
    return array.reduce(function(prev,curr){
        return curr === number ? (prev+1) : prev;
    },0);
}
console.log(countWithReduce(numbers,8));
console.log(countWithReduce(numbers,3));
console.log(countWithReduce(numbers,5));


// WRITE A FUNCTION THAT SORTS OBJECTS IN ARRAY BY AGE / ASCENDING
let sortedByAge = [...people].sort(function(a,b){
    return a.age - b.age;
});
console.log(sortedByAge);


// WRITE A FUNCTION THAT SORTS OBJECTS IN ARRAY ALPHABETICALLY BY NAME / DESCENDING
let sortedByName = [...people].sort(function(a,b){
    return (a.name < b.name) ? 1 : -1;
})
console.log(sortedByName);


// WRITE A FUNCTION THAT FILTERS THE NAMES HAVING SOME LETTER
let filterNamesWithLetter = function(array,letter){
    return array.filter(function(item){
        return item.name.includes(letter);
    });
}
console.log(filterNamesWithLetter(people,"z"));