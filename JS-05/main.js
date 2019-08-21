let names = [
    "Karol",
    "Martina",
    "Robert",
    "Biancolino",
    "Rene"
];
// WRITE A FUNCTION THAT TAKES ARRAY WITH NAMES AS ARGUMENT AND RETURNS COPY OF THAT ARRAY WITH NAMES IN UPPERCASE FORMAT, FOR EXAMPLE ["KAROL", "MARTINA", "ROBERT", "RENE"]
function uppercaseArray(array){
    return array.map(function(name){
        console.log(name[0]);
        console.log(name.split("").splice(0,1).toString());
        console.log(name.split("").splice(0,1).join(""));
        return name.toUpperCase();
    })
}
console.log(uppercaseArray(names));


// WRITE A FUNCTION THAT FINDS THE LONGEST NAME IN ARRAY WITH REDUCE FUNCTION

function longestName(array){
    return array.reduce(function(total,current){
        console.log(total);
        console.log(current);
        let result;
        // let isBigger = (10>9) ? "ten is bigger than nine" : "ten is not bigger than nine";
        console.log(current+""+current.length+":"+total+""+total.length+",")
        if(current.length>total.length){
            result = current;
        } else {
            result = total;
        }
        console.log(result);
        return result;
    },"");
}
console.log(longestName(names));


// WRITE A FUNCTION THAT FILTERS THE NAMES HAVING SOME LETTER PROVIDED AS ARGUMENT

let students = [
    { name:"Karol", examResult:4 },
    { name:"John", examResult:3 },
    { name:"Sophie", examResult:2 },
    { name:"Robert", examResult:5 },
    { name:"Bruce", examResult:1 }
]

// WRITE A FUNCTION TAKING TWO ARGUMENTS (ARRAY WITH NAMES, SEARCHED NAME), AND RETURNS THE EXAM RESULT OF SEARCHED PERSON 
// FOR EXAMPLE getExamResult(students,"Karol") SHOULD RETURN 4