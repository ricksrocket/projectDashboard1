"use strict";
/*eslint-disable*/

Array.prototype.myFilter = function (filterFn) {
    let resultArr = [];
    for (const element of this) {
        if (filterFn(element)) resultArr.push(element);
    };
    return resultArr;
};

function filterFn(num) {
    if (num === 1) return false
    if (num === 2) return true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    } return true
};


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11]
let r = arr.myFilter(filterFn);
console.log(r);