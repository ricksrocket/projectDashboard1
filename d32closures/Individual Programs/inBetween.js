"use strict";
/*eslint-disable*/
let arr = [1, 2, 3, 4, 5, 6, 7];

//console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

function inBetween(a, b) {
    return function (element) {
        return element >= a && element <= b;
    }
}

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

//console.log(arr.filter(inArray([1, 2, 10]))); // 1,2



function exclBetween(a, b) {
    return function (element) {
        return element < a || element > b;
    }
}

function inArray(arrMatches) {
    return function (element) {
        for (const matchNum of arrMatches) {
            if (element === matchNum) { return element }
        }
    }
}

console.log(arr.filter(exclBetween(3, 6))); // 3,4,5,6
console.log(arr.filter(inArray([1, 2, 10]))); // 1,2


function inArray1(arrMatches) {
    return function (element) {
        return arrMatches.includes(element)
    }
}
console.log(arr.filter(inArray1([1, 2, 10]))); // 1,2
console.log(typeof(5));


