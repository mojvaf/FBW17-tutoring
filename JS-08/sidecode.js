let x = 1;
if(x===2){
    console.log("This number is 2");
} else {

    if(x>2){
        console.log("This number is not 2 and is bigger than 2");
    } else{
        console.log("This number is not 2 and is not bigger than 2");
    }
    
}

// CONDITION ? TRUE CASE : FALSE CASE
console.log( x===2 
    ? "This number is 2"
    : "This number is not 2"
    );

// CONDITION ? TRUE CASE : (CONDITION#2 ? TRUE CASE : FALSE CASE)
console.log(
    x===2 
    ? "This number is 2"
    : (
        x>2 
        ? "This number is not 2 and is bigger than 2."
        : "This number is not 2 and is not bigger than 2"
        )
)

let object = {
    name:"Karol",
    age:30
}

let property = "country";

console.log(object.age);
console.log(object["age"]);
//THIS IS THE MOST SAFE WAY
object[property] = "Poland";

console.log(object);