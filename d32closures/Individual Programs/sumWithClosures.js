"use strict";
/*eslint-disable*/

function sum(a) {
    if (!a) { a = 0 }
    return function (b) {
        if (!b) { b = 0 }
        return function (c) {
            if (!c) { c = 0 }
            return a + b + c;
        }

    }
}
console.log(sum(3)(4)(9));

function sum(a) {
    if (!a) { a = 0 }
    return function (b) {
        if (!b) { b = 0 }
    }
}


