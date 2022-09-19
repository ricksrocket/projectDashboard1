"use strict"

module.exports = { generateArray };


/*eslint-disable*/

/**
 * This function that takes two integers as inputs and returns a 2-dimensional array containing 
 * sequential numbers across each row.
 * @param {Number} rows is the number of rows in the 2-dimensional array
 * @param {*} columns is the number of columns in the 2-dimensional array
 * @returns {Array} this function returns a 2-2-dimensional array filled elements as decribed above
 */


function generateArray(rows, columns) {
    let arr = [];
    let sum = 1;
    //let i;
    for (let i = 0; i < rows; i++) {
        arr.push([]);
        for (var j = 0; j < columns; j++) {
            sum=(columns*i)+1;
            arr[i][j] = sum + j;
        }
    }
    return arr;
}


let result = generateArray(3,4)
console.log(result);

console.log(result[0][1]);


