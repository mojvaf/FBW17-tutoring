let numbers = [ 2,4,6,8]
let sum = numbers.reduce(function(total,current){
    console.log(total);
    console.log(current);
    return total+current;
},0);
console.log(sum);

// total = 0
// total = 0 + 2
// total = 2 + 4
// total = 6 + 6
// total = 12 + 8 

// total = 2
// total = 2 + 4
// total = 6 + 6
// total = 12 + 8 


let cars = [
    { 
        name:"Audi R8",
        color:"red",
        price:100
    },
    { 
        name:"BMW M5",
        color:"black",
        price:200
    },
    { 
        name:"Volkswagen Golf",
        color:"red",
        price:400
    },
    { 
        name:"Nissan GT",
        color:"red",
        price:300
    },
    { 
        name:"Citroen Xsara",
        color:"black",
        price:500
    },
    { 
        name:"Fiat Uno",
        color:"pink",
        price:1000
    }
];
console.log(cars);
console.log(Array.isArray(cars));


let people = [
    { name:"Jesus", birth:-30, death:0 },
    { name:"T1000", birth:2060, death:2005 },
    { name:"2PAC", birth:1970, death:1992 },
    { name:"Mother Theresa", birth:1920, death:2000 }
]

// #1 SUM ALL THE PRICES (REDUCE)

// VARIABLE = ARRAY

 function countTotalPrice(arrayOfCars){
    let price = arrayOfCars.reduce(function(total, current){
        return total + current.price;
    },0);

    return price;
}
console.log(countTotalPrice(cars))

cars;

// #2 MULTIPLY ALL THE PRICES BY 100 (MAP)

cars = cars.map(function(car){
    car.price *= 100;
    // car["price"] *= 100;
    return car;
});
console.log(cars);



// #3 FILTER ALL THE CARS THAT PRICE IS BETWEEN 20000 AND 50000 (FILTER)


let filteredCars = cars.filter(function(car){
    //console.log(car);
    return car.price <= 50000 && car.price >= 20000;
});
console.log(filteredCars);
console.log(cars);

// #4 RETURN OBJECT WITH COLORS AS KEYS, AND HOW MANY CARS HAVE IT AS VALUE (REDUCE)
/*
let colors = {
    red:3,
    black:2,
    pink:1
}
*/
let colors = cars.reduce(function(total,current,index){
    console.log("ITERATION",index)
    console.log("-".repeat(40));
    console.log(total);
    console.log(current.color)
    console.log(current.name);



    if(total[current.color]===undefined){
        total[current.color]=1;
    } else {
        total[current.color]++;
    }
    return total;

},{});
console.log(colors);






cars;


// #5 RETURN ARRAY WITH CAR NAMES THAT CONTAINS STRING PROVIDED AS SECOND PARAMETER (FILTER AND ...)

// "ia"
let filterByString = function(array,string){
    let filtered = array.filter(function(car){
        console.log(car);
        return car.name.toLowerCase().includes(string.toLowerCase());
    });
    return filtered;
}
console.log(filterByString(cars,"ia"));
console.log(filterByString(cars,"T"));

// #6 SORT THE CARS BY PRICE ASCENDING (SORT)
// #7 SORT THE ARRAY DESCENDING BY THE YEARS THAT PERSON HAS LIVED