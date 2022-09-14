"use strict"
/*eslint-disable*/



const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix.length);
function sumMatrix(arr) {
    let sum = 0;
    for (let i=0; i<matrix.length; i++) {

        for (let j = 0; j < matrix[i].length; j++) {
            sum = sum + matrix[i][j];
        }
    }
    return sum;
}

console.log(sumMatrix(matrix));
