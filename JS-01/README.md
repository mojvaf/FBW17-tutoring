# Javascript exercise 12/08/2019
## PREREQUISITES
```javascript
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
```


*Please try to use only array methods*
## Tasks to do: 

1. Display the most expensive product in shop (`sort()`)
2. Display products with price higher then 1 and smaller then 2 (`filter()`)
3. Display the values of all products available in shop, consider their quantity (`reduce()`)
4. Display the average price of products in shop. Round the result to 2 places after point (for example 3.55) (`Number(x).toFixed(y)`)
5. Display the products with names containing at least 2 letters 'e/E' (`indexOf(x) & lastIndexOf(x)`)
6. Write a function that will be adding products to the basket array. Use it to add:
    - 2 eggs, 
    - 3 milks, 
    - 1 champagne, 
    - 2 broccolis, 
    - 20 beers, 
    - 1 bread 
7. Create a receipt object. It should contain array of products, and total price properties (`map()`)
8. Display the receipt (`forEach()`)