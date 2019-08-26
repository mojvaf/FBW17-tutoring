let numbers2D = [
    [ 10, 7, 9 ],
    [ 3, 12, 4, 5 ],
    [ 5, 11, 8, 19, 90 ],
    [ 2, 1, 6 ]
];

for(let i = 0; i < numbers2D.length; i++){
    console.log("This is subarray with index",i,numbers2D[i]);
    for(let j = 0; j < numbers2D[i].length; j++){
        console.log("This is element of subarray with index",j,numbers2D[i][j]);
    }
}