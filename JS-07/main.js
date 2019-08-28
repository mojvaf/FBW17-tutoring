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

let people = [
    { name:"Jesus", birth:-30, death:0 },
    { name:"T1000", birth:2060, death:2005 },
    { name:"2PAC", birth:1970, death:1992 },
    { name:"Mother Theresa", birth:1920, death:2000 }
]

// #1 SUM ALL THE PRICE (REDUCE)
// #2 MULTIPLY ALL THE PRICES WITH 100 (MAP)
// #3 FILTER ALL THE CARS THAT PRICE IS BETWEEN 200 AND 500 (FILTER)
// #4 RETURN OBJECT WITH COLORS AS KEYS, AND HOW MANY CARS HAVE IT AS VALUE (REDUCE)
// #5 RETURN ARRAY WITH CAR NAMES THAT CONTAINS STRING PROVIDED AS SECOND PARAMETER (FILTER AND ...)
// #6 SORT THE CARS BY PRICE ASCENDING (SORT)
// #7 SORT THE ARRAY DESCENDING BY THE YEARS THAT PERSON HAS LIVED