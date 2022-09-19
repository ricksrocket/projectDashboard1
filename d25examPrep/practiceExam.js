"use strict"
/*eslint-disable*/

const x = console.log("hi");
console.log(x);

function getSix() { return 6; }

const f1 = getSix();
const f2 = getSix;
const f3 = f1;
const f4 = f2();
const f5 = f1();
console.log(f5);