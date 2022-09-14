"use strict"

/*eslint-disable*/

let start = 0;
function someFun(num) {
    let jordan = 23; if (num >= 0) {
        num = Math.sqrt(num)
    }
    start = jordan + num;
    console.log(num + " " + jordan + " " + start);
    return num;
}

console.log(start); //______________________
console.log(someFun(100));// ______________________
console.log(start); //______________________
//console.log(jordan); //_not defined_____________________

/*
const x = 10;
const y = x;
y = 100;
console.log(x);
*/

/*const x = console.log('hi')
console.log(x);*/

let myArray = [1, 2, 3, 4];
let anotherArray = [10, 11, 12, 13]
console.log(myArray[0]);//expected 1
myArray = anotherArray;// expected 
console.log(myArray[0]);// expected 10
console.log(myArray.length);// expected 4 

// --------------------------------------------------------------------------------
function hi(name) {
    return 'Hi ' + name;
}
let goodBye = function () { return 'Good Bye'; }
console.log(hi('Developer', 'Welcome'));// Hi Developer
console.log(goodBye('Developer'));//Good Bye
console.log(goodBye); //
console.log(goodBye());

function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        console.log('Age is less than 18');
    }
}
const z = checkAge(19);
const w = checkAge(18);

console.log(z, w);//true, undefined

function getQuote() {
    return
    "this is a really long quote and therefore I want it to be on it’s own line."
}
const m = getQuote();
console.log(m);

function getSix() { return 6; }
const f1 = getSix();
const f2 = getSix;
const f3 = f1;
const f4 = f2();
//const f5 = f1();
console.log(f1, f2, f3, f4);
