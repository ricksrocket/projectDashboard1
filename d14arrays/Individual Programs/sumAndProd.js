"use strict"

module.exports = { sum, multiply };


/**
 * The function sum() and function multiply()  sums and multiplies (respectively) all the numbers 
 * in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) 
 * should return 24. 
 * 
 * @param {Array} arr is an array of numbers to be summed and multiplied
 * @returns {Number} sum is the addition of all of the elements; prod is the value of the
 * product of all of the elements
 */



/*eslint-disable*/

function sum(arr) {
    let sum = 0;

    for (const element of arr) {
        sum = sum + element;
    }

    return sum;
}

function multiply(arr) {
    let prod = 1;

    for (const element of arr) {
        prod = prod * element;
    }

    return prod;
}

console.log(multiply([1, 2, 3, 4]));

//hello rick