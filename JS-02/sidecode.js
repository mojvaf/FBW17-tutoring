let lengthOfTheWords = [2,3,4,5,6].map(function(item){
    let multipliedNumber = item * 2;
    //console.log(item);
    return multipliedNumber;
});
console.log(lengthOfTheWords);
// [4,6,8,10,12]

console.log(lengthOfTheWords.filter(function(number){
    return number < 10;
}))

console.log(!true)