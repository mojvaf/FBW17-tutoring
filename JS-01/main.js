//PREREQUISITES
const basket = [];

const shopProducts = [
    {
        productName : "Bread",
        price : 1,
        quantity : 10
    },
    {
        productName : "Beer",
        price : 1.25,
        quantity : 100
    },
    {
        productName : "Champagne",
        price : 25,
        quantity : 10
    },
    {
        productName : "Broccoli",
        price : 2,
        quantity : 20
    },
    {
        productName : "Milk",
        price : 1.1,
        quantity : 50
    },
    {
        productName : "Eggs",
        price : 1.5,
        quantity : 100
    },
    {
        productName : "Blueberries",
        price : 3,
        quantity : 50
    },

    
];

//PLEASE TRY TO USE ONLY ARRAY METHODS


//DISPLAY THE MOST EXPENSIVE PRODUCT IN SHOP
console.log(shopProducts)
let mostExpensive = shopProducts.sort(function(a,b){
    console.log(a); //THIS PRINTS OBJECTS INDEXED FROM 1 to THE END 
    console.log(b); //THIS PRINTS OBJECTS INDEXED FROM 0 to THE END-1
    return a.price - b.price;
});
console.log(mostExpensive[mostExpensive.length-1]);
//console.log(mostExpensive.pop());


//DISPLAY PRODUCTS THAT PRICE IS HIGHER THAN 1 AND SMALLER THAN 2
let filteredArray = shopProducts.filter(function(product){
    return product.price >= 1 && product.price <=2
});
console.log(filteredArray);


//DISPLAY THE VALUES OF ALL PRODUCTS AVAILABLE IN SHOP, CONSIDER THEIR QUANTITY
let totalValue = shopProducts.reduce(function(sum, currentItem){
    console.log(sum);
    console.log(currentItem.productName);
    return sum + currentItem.price * currentItem.quantity;
},0);
console.log(totalValue) // PRICE OF ALL PRODUCTS


//DISPLAY THE AVERAGE PRICE OF PRODUCTS IN SHOP, ROUND THE RESULT TILL 2 PLACES AFTER POINT (3.55)
let averagePrice = shopProducts.reduce(function(sum,currentItem){
    return sum + currentItem.price;
},0) / shopProducts.length;
console.log(Number(averagePrice).toFixed(2));


//DISPLAY THE PRODUCTS THAT HAVE IN THEIR NAMES 2 LETTERS 'E or e'
let productsWithE = shopProducts.filter(function(product){
    console.log(product);
    console.log(product.productName.indexOf("e"));
    console.log(product.productName.lastIndexOf("e"));
    return product.productName.indexOf("e")!== -1 && 
    product.productName.indexOf("e") !== product.productName.lastIndexOf("e")
})
console.log(productsWithE);



//WRITE A FUNCTION THAT WILL BE ADDING TO THE BASKET: 
//2 BOXES OF EGGS, 3 BOXES OF MILK, 1 CHAMPAGNE, 2 BROCCOLIS, 20 BEERS, 1 BREAD 

//CREATE A RECEIPT (MAP)

//DISPLAY RECEIPT (FOREACH)
