"use strict"
/*eslint-disable*/
/**
 * 
 * @param {Array} arr is an array of numbers or letters/strings
 * @returns {Number} the element with the maximum value 
 */
function reverseArray(arr) {
    let revArr = [];

    for (const element of arr) {
        revArr.unshift(element);
    }

    return revArr;
}
console.log(reverseArray([1, 2, 3, 4, 5]));