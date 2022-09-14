"use strict"
/*eslint-disable*/


function somethingOdd(array) {
    let prod = 1;
    for (let i = 0; i < array.length; i++) {
        if (i%2 !==0){
            prod = prod*array[i]
            
        }
    }
    return prod;
}

let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let zed = console.log(somethingOdd(arr1));
console.log (zed)

