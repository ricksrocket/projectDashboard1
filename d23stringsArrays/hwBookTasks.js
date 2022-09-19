"use strict";
/*eslint-disable*/

const prompt = require("prompt-sync")();
/*
const a = +prompt("Enter the first number: ");
const b = +prompt("Enter the second number: ")
console.log(a + b);

console.log(Math.floor(a + b));
console.log((Math.round(100 * (a + b))) / 100);
console.log((a+b).toFixed(2));
*/
/*

function readNumber() {
    let num;
    do {
        num = prompt("Please enter a number: ", 0)
        //console.log(num);
        console.log(!isFinite(num));
    } while (!isFinite(num));

    if (num === null || num === "") {
        return null
    }
    else return +num;
}
console.log(!isFinite("12"));
console.log(readNumber());


/*
function readNumber() {
    let a = Infinity;
    while (Number.isNaN(a)) {
        const a = prompt("Please enter a number: ");
    }
    console.log(Number.isNaN(a));
    return a
}
console.log(readNumber());
*/

function random(min, max) {
    let arr = [];
    for (let i = 0; i < 100; i++) {
        arr.push(Math.floor(min + (1 + max - min) * Math.random()));
    }
    return arr;
}


let minMax = random(1,5).forEach((element) => {
    let arrMinMax=[];
    let arrMin = Infinity;
    let arrMax = -Infinity;
    if (element < arrMin) {
        arrMin = element;
    }
    if (element > arrMax) {
        arrMax = element;
    }
   return arrMinMax
}
)
console.log(minMax);

let str = "As sly as a fox, as strong as an ox";
const strLower = str.toLowerCase();
let target = "as";

let pos = -1;
while ((pos = strLower.indexOf(target, pos + 1)) != -1) {
  console.log( pos );
}
    