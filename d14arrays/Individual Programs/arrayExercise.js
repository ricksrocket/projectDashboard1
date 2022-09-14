"use strict"
/*eslint-disable*/

const testArray = [10, 20, 30, 40, 50];
function findAverage(arr) {
    let sum = 0;
    let average;
    for (let i=0; i<arr.length; i++)  {
        sum = sum + arr[i];
    }
    console.log(sum)
    average = sum/arr.length;
    return average;
}
console.log(findAverage(testArray));


