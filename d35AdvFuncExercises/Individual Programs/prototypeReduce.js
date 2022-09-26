"use strict";
/*eslint-disable*/

Array.prototype.myReduce = function (callbackFn, initVal) {
    let a = initVal ?? null

    /*for (let i = 0; i < this.length; i++) {
        a = callbackFn(a, this[i])
    }*/
    for (const element of this){
        a = callbackFn(a, element)
    }


    return a;
}



function summer(prev, curr) { return prev * curr };



let arr = [1, 2, 3, 4, 5]
let r = arr.myReduce(summer, 1);
console.log(r);