"use strict"
/*
module.exports = { reverseArray, reverseArrayInPlace };
*/

//module.exports = { reverseArrayInPlace };



/*eslint-disable*/
/**
 * 
 * @param {Array} arr is an array of numbers or letters/strings
 * @returns {Number} the element with the maximum value 
 */
function reverseArray(arrToRev) {
    let revArr = [];

    for (const element of arrToRev) {
        revArr.unshift(element);
    }

    return revArr;
}

//console.log(reverseArray(["A", "B", "C"]));


function reverseArrayInPlace(arrToRev) {
    let revArr = [];

    for (const element of arrToRev) {
        revArr.unshift(element);
    }

    arrToRev = [];
    

    for (const element of revArr) {
        arrToRev.push(element);
    }

    return arrToRev;
    console.log(arrayValue)
}



//console.log(reverseArrayInPlace(["A", "B", "C", "D"]));

