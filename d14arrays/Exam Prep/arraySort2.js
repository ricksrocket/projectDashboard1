"use strict"
/*eslint-disable*/



/*
function arraySort (val1, val2, val3) {
let arrSort=[];
let min = "";

*/

var Arr = [1, 7, 2, 8, 3, 4, 5, 0, 9];

for (let i = 1; i < Arr.length; i++) {
    for (let j = 0; j < i; j++) {
        if (Arr[i] < Arr[j]) {
            let temp = Arr[i];
            Arr[i] = Arr[j];
            Arr[j] = temp;
        }

    }
}


console.log(Arr);