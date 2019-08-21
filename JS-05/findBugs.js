let numbers = [ 2, 4, 6, 8 ];


/* RESULT OF THIS FUNCTION SHOULD BE SUM OF ALL NUMBERS IN ARRAY
 TRY TO MAKE IT WORK, BY FIXING SMALL BUGS */
let sumNumbers = function(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum = sum + array[i];
    }
    return sum;
}
console.log(sumNumbers(numbers));
console.log(sumNumbers([3,8,2,1]))


/* THIS FUNCTION SHOULD TAKE TWO ARGUMENTS- ARRAY AND NUMBER,
RESULT OF IT SHOULD BE NEW ARRAY, WITH VALUES FROM ORIGINAL ONE MULTIPLIED BY PROVIDED NUMBER  
ARRAY = [ 2, 4, 6, 8 ], NUMBER = 2, should give you [ 4, 8, 12, 16 ]
TRY TO FIX IT TO GET EXPECTED RESULT */
let multiplyByNumber = function(array,number){
    console.log(array);
    return array.map(function(item){
        item = item * number;
        return item;
        // return item * number
    });
}
console.log(numbers);
console.log(multiplyByNumber(numbers,2));


/* RESULT OF THIS FUNCTION SHOULD BE THE BIGGEST NUMBER IN PROVIDED ARRAY
I WROTE THIS FUNCTION AFTER 5 BEERS, CAN YOU FIX IT FOR ME?
*/
let biggestNumber = function(array){
    let biggest = array[0];
    for(let i = 1; i < array.length; i++ ){
        if(array[i]>biggest){
            //WE FOUND BIGGER NUMBER, SO WE SAVE IT
            biggest=array[i];
        }
    }
    return biggest;
}
console.log(biggestNumber(numbers));