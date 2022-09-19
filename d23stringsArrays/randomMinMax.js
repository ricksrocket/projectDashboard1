"use strict";
/*eslint-disable*/



const ArrayMinMax = (minVal, maxVal) => {
    let ArrMinMax = [];
    let numArr = [];
    let min = Infinity;
    let max = -Infinity;

    for (let i = 0; i < 200; i++) {
        numArr.push(Math.floor(minVal + (1 + maxVal - minVal) * Math.random()));
    }
    console.log(numArr);

    numArr.forEach((element) => {
        if (element < min) {
            min = element;
        }
        if (element > max) {
            max = element;
        }
    });
    return ArrMinMax = [min, max];
}

console.log(ArrayMinMax(20,50));



    