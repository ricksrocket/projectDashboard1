"use strict";
/*eslint-disable*/

Array.prototype.myMap = function (callbackFn) {
    let resultArr = [];
    for (const element of this) {
        resultArr.push(callbackFn(element));
    }
    return resultArr;
}

function squareNum(num) { return num * num }


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11]
let r = arr.myMap(squareNum);
console.log(r);