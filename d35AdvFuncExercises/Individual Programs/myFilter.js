"use strict";
/*eslint-disable*/

function myFilter(arr, filterFn) {
    let resultArr = [];
    for (const element of arr) {
        if (filterFn(element)) resultArr.push(element);
    };
    return resultArr;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11]

function filterFn(num) {
    if (num === 1) return false
    if (num === 2) return true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    } return true
};

//console.log(filterFn(7));
console.log(myFilter(arr, filterFn))

function myMap(arr, mapFn) {
    let resultArr = [];
    for (const element of arr) {
        resultArr.push(mapFn(element));
    }
    return resultArr;
}

function squareNum(num) { return num * num }
console.log(myMap(arr, squareNum));

function myReduce(callBackFn, initVal ){
    let accum;
    initVal ? accum=initVal: accum=0;

}

