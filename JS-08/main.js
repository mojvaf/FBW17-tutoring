let numbers = [ 2, 19, 18, 5, 9, 1, 10, 3 ];

/* 
#1 write a function that takes array of numbers as argument, and returns object that will tell me how many odds and even numbers there are inside
This is how result should look:
{
    odd:5,
    even:3
} 
*/

function oddEven(array){
    let result = {
        odd:0,
        even:0
    };
    for(let i = 0; i < array.length; i++){
        if(array[i]%2===0){
            result.even++;
        } else {
            result.odd++;
        }
    }
    return result;
}
console.log(oddEven(numbers));




let mixedArray = [
    2, 
    4, 
    "name", 
    [], 
    "tutor", 
    5, 
    {name:"Karol"}
];
/* 
#2 Write a function takes array as argument and returns object that will tell me how many elements of each type this array contains
{
    number: 3,
    string: 2,
    boolean: 1,
    object: 2
}
*/

function countTypes(array){

    return array.reduce(function(total,current){
        console.log(current);
        console.log(total);
        console.log(typeof current);
        if(total.hasOwnProperty(typeof current)){
            total[typeof current]++
        } else {
            // total = {}, { number: 1 }
            // current = 2, 4, "name"
            // typeof current = number, number, string
            // total["number"] = 1, total["number"]++, total["string"] = 1
            // total = { number: 2 }, { number:2, string:1 }
            // return total
            total[typeof current] = 1;
        }
        return total;
    },{});

}
console.log(countTypes(mixedArray));








let people = [
    { id:0, name:"Karol", age:20, country: "Poland" },
    { id:1, name:"Karol", age:50, country: "Germany" },
    { id:2, name:"Robert", age:25, country: "Germany" },
    { id:3, name:"Martina", age:22, country: "Germany" },
    { id:4, name:"Ajil", age:30, country: "Syria" },
    { id:5, name:"Mor", age:23, country: "Israel" }
]

/* 
#3 Write a function that takes three arguments - name of the person, property name and value that should be updated for this property, for example updateProperty("Karol","country","Germany");
 ...
{ name:"Karol", age:20, country: "Germany" },
...
*/
function updateProperty(id,key,value){
    
    let result = people.find(function(person){
        return person.id === id;
    });

    result[key] = value;
    console.log(result);
}


updateProperty(5,"country","Germany");
console.log(people);
updateProperty(5,"age",25);
console.log(people);
updateProperty(1,"name","Michael");
console.log(people);