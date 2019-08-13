let sentence = "Hello world. This is my first amazing string.";
let vowels = "aeiouy";

// TASK #1
let capitalize = sentence =>
    sentence
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
console.log(capitalize(sentence));

// TASK #2
let countVowels = sentence
    .split("")
    .filter(letter => vowels.indexOf(letter) !== -1).length;
console.log(countVowels);

// TASK #3
let reversedWords = sentence
    .split(".")
    .map(sent => {
        return sent
            .split(" ")
            .map(word => {
                return word
                    .split("")
                    .reverse()
                    .join("");
            })
            .join(" ");
    })
    .join(".");
console.log(reversedWords);

//TASK #4
let longestWord = sentence.split(" ").reduce((prev, curr) => {
    console.log(prev, prev.length);
    console.log(curr, curr.length);
    return prev.replace(".", "").length > curr.replace(".", "").length
        ? prev
        : curr;
});
console.log(longestWord, longestWord.length);

// TASK #5
String.prototype.capitalize = function() {
    return this.split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};
console.log(sentence.capitalize());

//SENTENCE SHOULD NOT CHANGE AT ANY MOMENT
console.log(sentence);
