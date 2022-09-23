"use strict";
/*eslint-disable*/

/* You need the module.exports when testing in node.  Comment it out when you send your 
file to the browser 
/**
 * 
 * 
 */

module.exports = {copyArray, concat, findMin, combineObjs }; //add all of your function names here that you need for the node mocha tests


const oldArr = [1, 2, 3];
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const obj1 = {prop1: 1, prop2: 2};
const obj2 = {prop3: 1, prop4: 2};

function copyArray(arr) {
    return [...oldArr];

}

function concat(arr1, arr2) {
    let arr12 = arr1.concat(arr2);
    return arr12;

}

function findMin(...numbers) {
    let copyOfNumbers = [...numbers];
    let min = Infinity;
    //console.log (copyOfNumbers);
    for (const number of copyOfNumbers) {
        if (number < min){
            min = number;
        }
    }
    return min;
}

function combineObjs(obj1, obj2) {
    let obj12 = {...obj1, ...obj2};
    //obj12.push[obj1];
    //obj1.concat(obj2);
    return obj12;

}

console.log(combineObjs(obj1, obj2));// expect: {prop1: 1, prop2: 2, prop3: 1, prop4: 2}