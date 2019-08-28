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

// #1 SUM ALL THE PRICE (REDUCE)

// VARIABLE = ARRAY

 function countTotalPrice(arrayOfCars){
    let price = arrayOfCars.reduce(function(total, current){
        return total + current.price;
    },0);

    return price;
}
console.log(countTotalPrice(cars))



// #2 MULTIPLY ALL THE PRICES BY 100 (MAP)

cars = cars.map(function(car){
    car.price *= 100;
    // car["price"] *= 100;
    return car;
});
console.log(cars);



// #3 FILTER ALL THE CARS THAT PRICE IS BETWEEN 20000 AND 50000 (FILTER)


let filteredCars = cars.filter(function(car){
    console.log(car);
    return car.price <= 50000 && car.price >= 20000;
});
console.log(filteredCars);

// #4 RETURN OBJECT WITH COLORS AS KEYS, AND HOW MANY CARS HAVE IT AS VALUE (REDUCE)
/*
let colors = {
    red:3,
    black:2,
    pink:1
}
{
    red:1
}
*/
let colors = cars.reduce(function(total,current){
    console.log(total[current.color])
    
    if(total[current.color]===undefined){
        total[current.color]=1;
    } else {
        total[current.color]++;
    }
    return total;
},{});
console.log(colors);

// #5 RETURN ARRAY WITH CAR NAMES THAT CONTAINS STRING PROVIDED AS SECOND PARAMETER (FILTER AND ...)



// #6 SORT THE CARS BY PRICE ASCENDING (SORT)
// #7 SORT THE ARRAY DESCENDING BY THE YEARS THAT PERSON HAS LIVED