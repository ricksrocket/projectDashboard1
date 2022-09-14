"use strict"

module.exports = { maxOfThree };


/*eslint-disable*/
/**
 * This function, maxOfThree(),  takes three numbers as 
arguments and returns the largest of them. This function will work
with strings and numbers and also boolean values. But will not return a value
in the boolean case where all values are false.
 * @param {Array} arr is an array of numbers or letters/strings
 * @returns {Number} the element with the maximum value 
 */

function maxOfThree(elem1, elem2, elem3) {
    let arr = [elem1, elem2, elem3];
    let max;
    if (typeof (elem1) === "string") {
        max = "";
    }
    else if (typeof (elem1 === "number")) {
        max = -Infinity;
    }

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
maxOfThree('The Road Ahead', 'Walter Isaacson', 'Mockingjay: The Final Book of The Hunger Games')
console.log(maxOfThree('The Road Ahead', 'Walter Isaacson', 'Mockingjay: The Final Book of The Hunger Games'));
