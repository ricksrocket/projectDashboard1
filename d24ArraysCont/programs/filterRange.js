"use strict";
/*eslint-disable*/


let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
    //let result = [];

    let result = arr.filter((num) => {
        if (num >= a && num <= b) {
            return true;
        }
        else return false;
    });
    return result;
}



let filtered = filterRange(arr, 1, 4);

console.log(filtered); // 3,1 (matching values)

console.log(arr); // 5,3,8,1 (not modified)



function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            continue;
        }
        else {
            arr.splice(i, 1);
        }
    }
}

let arr1 = [5, 3, 8, 1];
console.log(arr1); // [5, 3, 8, 1];
filterRangeInPlace(arr1, 1, 4); // removed the numbers except from 1 to 4

console.log(arr1); // [3, 1]


