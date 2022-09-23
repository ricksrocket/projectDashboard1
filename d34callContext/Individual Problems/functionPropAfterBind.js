"use strict";
/*eslint-disable*/


function sayHi() {
    console.log(this.name);
}
sayHi.test = 5;

let bound = sayHi;

console.log(bound.test); // what will be the output? why?