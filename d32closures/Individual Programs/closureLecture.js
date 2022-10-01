"use strict";
/*eslint-disable*/
/*
let name = "John";

function sayHi() {
    console.log("Hi, " + name);
}

name = "Pete";
sayHi(); // what will it show: "John" or "Pete"?
*/

function makeWorker() {
    let name = "John";
    return function () {
        console.log(name);
    };
}



 let name = "Pete";
// create a function
let work = makeWorker();
// call it
work(); // what will it show? “John" (name where created) or “Pete" (name where called)?
//-----------------------------------------------------------------------------
/*Exercise page 8 of Lecture Slides
Write a function, makeCounter() that declares a local variable, count, and another 
local variable, innerFunc, which is an inner function; innerFunc will increment the
count variable and return the incremented value. makeCounter should return innerFunc.
Call it twice to make different counters, counter1 and counter2. Do they keep 
independent counts?
*/

/**
 * 
 * @returns 
 */

function makeCounter() {
    let count = 0;
    const innerFunc = function () {
        return count = count + 1;
    }
    return innerFunc
};

const counter1 = makeCounter();
const counter2 = makeCounter();
counter1();
counter1();
//console.log(counter1());
console.log("should be 3", counter1())
console.log("should be 1", counter2())


//-----------------------------------------------------------------------------
/*Exercise page 12 of Lecture Slides

Draw the execution context diagram for this code
Important: execution context cannot be discarded if it contains an external variable 
for a returned function
*/
/*
function makeCounter() {
    let count = 0;
    return function () {
        return count++;
    };
}
let counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
*/

/*
Question: how is this counter using the previous call variable count and 
skipping over count = 0 each call?
*/

