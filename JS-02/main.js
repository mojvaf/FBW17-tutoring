let sen1 = "Hello world. This is my first amazing string.";
let sen2 = "Another sentence it shoudl be fine.";
let vowels = "aeiouy";
//let vowels = ["a","e","i","o","u","y"];

// Write a function capitaliseWords(), that will transform first letter from each word in string to uppercase and return it as a new string.

let capitaliseWords = function(sentence){


    return sentence
        .split(" ")
        .map( function(word){
            //console.log(word);
            return word.charAt(0).toUpperCase() + word.substring(1);
        } )
        .join(" ");



}
console.log(capitaliseWords(sen1));
console.log(capitaliseWords(sen2));
console.log(capitaliseWords("Something extra to transform"));
console.log(capitaliseWords);

//console.log(sentence);

//Write a function that will print how many vowels ("a","e","i","o","u","y") string has.

let count = 0;
for(let i = 0; i < sen1.length; i++){
    console.log(sen1[i]);
    if(vowels.indexOf(sen1[i])!==-1) count++;
}
console.log(count);
console.log("my sentence is really awesome".indexOf("x"));

let countVowels = sen1.split("");
let lettersArray = countVowels.filter(
    function(letter){
        return vowels.indexOf(letter)!==-1;
    }
);
let realCountVowels = lettersArray.length;

console.log(realCountVowels);
