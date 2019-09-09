// FUNCTION TO PUT TITLE BEFORE EACH EXERCISE
function printTitle(title){
    console.log("-".repeat(80));
    console.log(title.toUpperCase());
    console.log("-".repeat(80));
}

// CLASSES
class Person{
    constructor(name){
        this.name = name;
    }
}

let person = {}
person.name = "Karol";
console.log(person.name);

// INITIALIZING OBJECT OF CLASS PERSON

// GETTING PROPERTIES AS ARRAY
// printTitle("GETTING PROPERTIES");

// GETTING VALUES AS ARRAY
// printTitle("GETTING VALUES");

// LOOPING THOUGH OBJECTS
// printTitle("LOOPING");

//---------------------------------------------------------------------------------------------------
// EXERCISES
//---------------------------------------------------------------------------------------------------

// DEFINE A METHOD THAT WILL PRINT HOBBIES, EACH ONE IN NEW LINE
// printTitle("METHOD THAT PRINT HOBBIES");

// DEFINE A METHOD THAT WILL CHANGE THE AGE OF A PERSON
// printTitle("METHOD THAT CHANGE AGE");

// DEFINE A FUNCTION THAT WILL COMPARE THE AGE OF TWO PERSONS, AND RETURN THE NAME OF THE OLDER ONE
// printTitle("FUNCTION COMPARING TWO PERSONS");

// DEFINE A FUNCTION THAT WILL REMOVE PROPERTY GIVEN AS ARGUMENT FROM PERSON
// printTitle("FUNCTION REMOVING PROPERTY FROM OBJECT");

// DEFINE A FUNCTION THAT WILL PRINT THE VALUE OF A PROVIDED PROPERTY (IF PROPERTY EXIST) FROM AN OBJECT PROVIDED AS ARGUMENT
// printTitle("FUNCTION PRINTING THE VALUE OF A PROVIDED PROPERTY");