"use strict";
/*eslint-disable*/


const ArrayMinMax = (array) => {
    let ArrMinMax = [];
    let min = null;
    let max = null;
    console.log(-1 < null)
    array.forEach((element) => {
        if (element < min) {
            min = element;
        }
        if (element > max) {
            max = element;
        }
    });
    return ArrMinMax = [min, max];
}
const testArray = [-1, -8, 9, 2, -7, 12, 10];
console.log(ArrayMinMax(testArray));
