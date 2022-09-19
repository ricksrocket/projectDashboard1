"use strict";
/*eslint-disable*/
/*
let result = arr.map(function (item, index) { // returns the new value instead of item
});

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item, index) => {
    return `"" ${index}: ${item.length}  `
});

console.log(lengths);
*/

function compareNumeric(a, b) {
    //a = "" + a;//lexicographic
    //b = "" + b;//lexicographic

    console.log(typeof(a));
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

let arr1 = [1, 15, 2];
arr1.sort(compareNumeric);
console.log(arr1);

/*
reduce the array to the product of the numbers (“expect 120”) 
reduce the array to the max of the numbers (“expect 5”)
*/

const arr2 = [1, 2, 3, 4, 5];
//arr2.reduce((prod, current) => {}) 
const result2 = arr2.reduce((prod, current) => prod * current, 1);//factorial
 
const result3 = arr2.reduce((sum, current) => sum + current, 0);//fibonacci style

const max = arr2.reduce( (max, current) => {
    if (current > max){
        return current;
    }
    else return max
});

console.log(result2);
console.log(result3);
console.log(max);
