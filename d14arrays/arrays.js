"use strict";
/*eslint-disable*/
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */

module.exports = {maxOfThree: maxOfThree, sum: sum, multiply: multiply }; //add all of your function names here that you need for the node mocha tests
 
/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(a, b, c){ 
    return c;
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr){
    let tot = 0;
    for (const number of arr){
        tot += number;
    }
    return tot;
}


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function multiply(arr){
    let tot = 1;

    return tot;

}
function multiply(arr) {
    let tot = 1;

    for (const element of arr) {
        tot = tot * element;
    }

    return tot;
}

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

function findLongestWord(arr) {
    let maxLength = 0;

    for (const element of arr) {
        if (element.length > maxLength) {
            maxLength = element.length;
        }
    }

    return maxLength;
}

function scoreExams(studentAnswers, correctAnswers) {
    let examScores = [];

    for (let i = 0; i < studentAnswers.length; i++) {
        let sum = 0;

        for (let j = 0; j < studentAnswers[i].length; j++) {
            if (studentAnswers[i][j] === correctAnswers[j]) {
                sum = sum + 1;
            }
            examScores[i] = sum
        }
    }
    return examScores;
}

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

function reverseArray(arr) {
    let revArr = [];

    for (const element of arr) {
        revArr.unshift(element);
    }

    return revArr;
}


function reverseArrayInPlace(arrayValue) {
    let len = arrayValue.length;
    const loopNum = Math.floor(len / 2);
    for (let i = 0; i < loopNum; i++) {
        let j = len - 1 - i;
        let temp = arrayValue[j];
        arrayValue[j] = arrayValue[i];
        arrayValue[i] = temp;
    }

return arrayValue;
}
