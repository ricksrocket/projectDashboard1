"use strict"
/*eslint-disable*/


const exp = ["{", "{", "}", "}"]; // balanced

const arr1 = [3, 5, 7];

for (const index of arr1) {
    if (index === "{") {
        console.log(index);
    }
}

/* function balanced(arr) {
    const bracketStack = [];
    if (arr.length %2 !== 0){
        return false
    }

    for (let element of exp){
        if (element==="{")

    }

}
*/

const arr2 = ["{", "{", "}", "}"];

for (const index of arr2) {
    if (index === "{") {
        console.log(index);
    }

}