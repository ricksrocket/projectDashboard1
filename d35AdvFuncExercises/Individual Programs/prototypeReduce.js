"use strict";
/*eslint-disable*/

Array.prototype.myReduce = function (callbackFn, initVal) {
    let accum = initVal ?? null

    /*for (let i = 0; i < this.length; i++) {
        a = callbackFn(a, this[i])
    }*/
    for (const element of this) {
        accum = callbackFn(accum, element)
    }


    return accum;
}



function fact(prev, curr) { return prev * curr };
function sum(prev, curr) { return prev + curr };



let arr = [1, 2, 3, 4, 5]
let r = arr.myReduce(sum, 0);
console.log(r);