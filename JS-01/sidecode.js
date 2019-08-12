let numbers = [10, 20, 30, 40, 50, 60]
console.log(numbers[0])
console.log(numbers[numbers.length-1])
//length = 6
//index of last element is 5
//first - numbers[0]
//last - numbers[length - 1]


// ITERATING WITH FOR AND FOREACH
for(let i = 0; i < numbers.length; i++){
    
    console.log(i); //INDEXES
    console.log(numbers[i]); //VALUES
    console.log(numbers); //ARRAY

    if(numbers[i]>30){
        console.log(numbers[i]);
    }
}

numbers.forEach(function(value,index,array){
    
    console.log(value);//VALUES
    console.log(index);//INDEXES
    console.log(array);//ARRAY

    if(value>30){
        console.log(value);
    }

});


// SUMMING WITH FOR LOOP AND REDUCE
let sum = 0;
for(let i = 0; i < numbers.length; i++){
    sum = sum + numbers[i];
    console.log(sum);
}
console.log(sum);

let sumR = numbers.reduce(function(sum,current){
    return sum + current;
},0)
//sum = 0;
//current = 10; return 10 // sum = sum + 10
//sum = 10; current = 20; // sum = 10 + 20;