// CLASSES
class Person{
    constructor(name,age,hair,hobbies,location){
        this.name = name;
        this.age = age;
        this.hair = hair;
        this.hobbies = hobbies;
        this.location = location;
        this.printHobbies = function(){
            this.hobbies.forEach(function(hobby){
                console.log(hobby);
            })
        }
        this.changeAge = (newAge) => {
            this.age = newAge;
        }
    }
}

// INITIALIZING OBJECT OF CLASS PERSON
let student_1 = new Person("Karol", 30, false, ["volleyball", "javascript", "jogging", "pizza"], "Poland");
let student_2 = new Person("Kristof", 29, true, ["basketball", "javascript", "photography"],"Caribbean");

// GETTING PROPERTIES AS ARRAY
let properties = Object.keys(student_1); // THIS IS RETURNING ARRAY
console.log(properties);

// GETTING VALUES AS ARRAY
let values = Object.values(student_1); // THIS IS RETURNING ARRAY
console.log(values);

// LOOPING THOUGH OBJECTS
for(let property in student_1){

    // property VARIABLE STORES A KEY/PROPERTY
    console.log(property);

    // student_1[property] WILL GET A VALUE OF A SPECIFIC PROPERTY
    console.log(student_1[property])
}

//---------------------------------------------------------------------------------------------------
// EXERCISES
//---------------------------------------------------------------------------------------------------

// DEFINE A METHOD THAT WILL PRINT HOBBIES, EACH ONE IN NEW LINE
student_1.printHobbies();


// DEFINE A METHOD THAT WILL CHANGE THE AGE OF A PERSON
student_1.changeAge(40);
console.log(student_1);


// DEFINE A FUNCTION THAT WILL COMPARE THE AGE OF TWO PERSONS, AND RETURN THE NAME OF THE OLDER ONE
function findOlderPerson(personA, personB){
    return personA.age>personB.age ? personA.name : personB.name;
}
console.log(findOlderPerson(student_1,student_2));


// DEFINE A FUNCTION THAT WILL REMOVE PROPERTY GIVEN AS ARGUMENT FROM PERSON
function deleteProperty(object,key){
    delete object[key];
    console.log(object);
}
deleteProperty(student_2,"location");


// DEFINE A FUNCTION THAT WILL PRINT THE VALUE OF A PROVIDED PROPERTY (IF PROPERTY EXIST) FROM AN OBJECT
let printValues = (object,key) => {
    if(object.hasOwnProperty(key)){
        console.log(object[key]);
    } else {
        console.log("Property doesn't exist");
    }
}
printValues(student_1,"location")