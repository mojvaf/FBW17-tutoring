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

// OBJECT.prototype

Array.prototype.displayArrayItems = function(){
    console.log(this);
}

let array = [ 1, 2, 3, 4, 5 ]
array.displayArrayItems();