"use strict"
/*eslint-disable*/

module.exports = { reverseArrayInPlace };
/**
 * 
 * @param {Array} arr is an array of numbers or letters/strings
 * @returns {Number} the element with the maximum value 
 */
function reverseArrayInPlace(arrayValue) {
    let len = arrayValue.length;
    const loopNum = Math.floor(len / 2);
    for (let i = 0; i < loopNum; i++) {
        let j = len - 1 - i;
        temp = arrayValue[j];
        arrayValue[j] = arrayValue[i];
        arrayValue[i] = temp;
    }

return arrayValue;
}
/*
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);*/