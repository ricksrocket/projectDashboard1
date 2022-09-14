"use strict"
/*eslint-disable*/

function arraySort (val1, val2, val3) {
let arrSort=[];
let min = "";
let pointer=null;
const tempArray = [val1, val2, val3];

for (let i = 0; i<3; i++ ){

    for (const element of tempArray){
        if (element < min){
            min = element;
            pointer = tempArray.indexOf(element)
           
            console.log(tempArray);
        }
    }
    arrSort.push(min);
    tempArray[pointer]=Infinity;
}
return arrSort;
}
console.log(arraySort(-1, -6, 9))