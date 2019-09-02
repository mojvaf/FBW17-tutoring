let array2D = [
    ["text", "number"],
    ["blabla", "blabla"]
];
console.log(array2D);

let car = {
    brand : "BMW",
    color : "red",
    price : 50000
}
let key = "brand"
// console.log(car.key); // THIS WILL NOT WORK
console.log(car[key]);

Array.prototype.displayArrayItems = function(){
    console.log(this);
}

let array = [ 1, 2, 3, 4, 5 ]
array.displayArrayItems();



let array1 = [ 2, 4, 6, 8 ];
let hasAtLeastOneOddNumber = array1.some(function(number){
    if(number % 2 !== 0) return number;
})
console.log(hasAtLeastOneOddNumber)



function checkIfEven(array){
    let result = array.every(function(number){
        if(number % 2 === 0) return true;
    })
    return result;
}
console.log(checkIfEven(array1));


let number = 10;

//CHECK IF NUMBER IS NOT EQUAL TO 0

let notEqual = function(number){
    return !!number
}

console.log("10 is not equal to 0.",notEqual(number))


console.log(1==1);
console.log(1===1);
console.log(1=="1");
console.log(1==="1");
console.log(!10);
console.log(!!1);
console.log(!0)
