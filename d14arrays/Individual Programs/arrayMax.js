"use strict"
/*eslint-disable*/
/**
 * 
 * @param {Array} arr is an array of numbers or letters/strings
 * @returns {Number} the element with the maximum value 
 */
function findLongestWord(arr) {
    let max = "";

    for (const element of arr) {
        if (element > max) {
            max = element;
        }
    }

    /*
    arr.forEach((element) => {
        if (element > max) {
            max = element;
        }
    });
    */
    return max;
}
console.log(findLongestWord([-20, 99, 123, -90]))