function countWithFilter(arrayOfNumbers,number){
    // console.log(numbers); // this will not work, 
    // because numbers variable is not defined in this file
    console.log(arrayOfNumbers);
    console.log(number);
    return arrayOfNumbers;
}
let savedArray = countWithFilter([2,4,6],2);
countWithFilter([3,7,8],6);
console.log(savedArray);