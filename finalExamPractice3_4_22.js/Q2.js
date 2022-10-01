"use strict";
/*eslint-disable*/


const arrary123 = [1, 2, 3];
let result = arrary123.map(element => { return Math.round(1000*Math.sqrt(element))/1000 })
console.log(result);