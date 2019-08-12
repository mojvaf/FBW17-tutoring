//PREREQUISITES
const basket = [];

const shopProducts = [
    {
        productName : "Bread",
        price : 1,
        quantity : 50
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
    }  
];

//PLEASE TRY TO USE ONLY ARRAY METHODS


//DISPLAY THE NAME OF MOST EXPENSIVE PRODUCT IN SHOP
let mostExpensive = shopProducts.sort(function(a,b){
    return b.price - a.price
});
console.log(mostExpensive[0].productName);


//DISPLAY PRODUCTS THAT PRICE IS HIGHER THAN 1 AND SMALLER THAN 2
let filteredProducts = shopProducts.filter(function(product){
    return product.price>=1 && product.price<=2
})
console.log(filteredProducts);


//DISPLAY THE PRODUCTS THAT HAVE IN THEIR NAMES 2 LETTERS 'E'
let productsWithEE = shopProducts.filter(function(product){
    return product.productName.indexOf('e')!== -1 && 
        product.productName.indexOf('e') !== product.productName.lastIndexOf('e') 
})
console.log(productsWithEE)


//DISPLAY THE VALUE OF ALL PRODUCTS AVAILABLE IN SHOP, CONSIDER THEIR QUANTITY
let totalValue = shopProducts.reduce(function(sum,current){
    return sum + (current.price * current.quantity);
},0);
console.log(totalValue)


//DISPLAY THE AVERAGE PRICE OF PRODUCTS IN SHOP
let averagePrice = shopProducts.reduce(function(sum, current){
    return sum + current.price
},0) / shopProducts.length;
console.log(Number(averagePrice).toFixed(2));


//WRITE A FUNCTION THAT WILL BE ADDING TO THE BASKET: 
//2 BOXES OF EGGS, 3 BOXES OF MILK, 1 CHAMPAGNE, 2 BROCCOLIS, 20 BEERS, 1 BREAD
let addProduct = function(itemName,quantity=1){
    for(let i = 0; i < quantity; i++){
        
        let product = shopProducts.filter(function(product){
            return product.productName === itemName
        }).map(function(product){
            return {
                productName : product.productName,
                price : product.price
            }
        })[0];
        
        if(product!==undefined){
            basket.push(product);
            console.log(`Added ${itemName} to the basket`);
        } else {
            console.log(`Couldn't add ${itemName}`);
        }
        
    }
}
addProduct("Eggs",3);
addProduct("Beer",20);
console.log(basket)


//CREATE A RECEIPT (MAP)
let receipt = basket.map(function(product){
    return { productName : product.productName,price : product.price };
})
let totalPrice = basket.reduce(function(sum,current){
    return sum + current.price;
},0);
console.log(totalPrice);
receipt = {
    products : basket,
    totalPrice : totalPrice
}
console.log(receipt);


//DISPLAY RECEIPT (FOREACH)
console.log("All the products:");
receipt.products.forEach(function(product){
    console.log(`${product.productName} : ${product.price}`);
})
console.log(`Total price equals to : ${receipt.totalPrice}`)