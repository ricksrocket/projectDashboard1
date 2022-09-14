"use strict"
/*eslint-disable*/


/* 1.	1.	Write a function, double, that takes a number and returns
 2 times the number..  */

const double = (num) => { return 2 * num };


/*  2.	Write a function times100 that takes a number and returns 100 times 
the number. */

const times100 = (num) => { return 100 * num };

console.log(double(4));
console.log(times100(4));

/*
function sayHi() {
    alert( "Hello" ); }
    const myHi = sayHi;
    console.log( sayHi ); // shows the function code function higherOrder() { return sayHi; }
*/

/* 3.	Write a function, myMap, that takes an array and a function and 
returns a new array that has the function applied to each element of 
the input array. */

const myMap = (arr, userFunction) => {
    let result = [];
    for (const element of arr) {
        result.push(userFunction(element))
    }
    return result;

}

const testArray = [-10, 0, 10, 20];
console.log(myMap(testArray, double));
console.log(myMap(testArray, times100));

let sayHi = function () {
    console.log("Hi");
};
sayHi();


const triple = function (arr) {
    let result = [];
    for (const element of arr) {
        result.push(3 * element);

    }
    return result;

};

console.log(triple(testArray));
console.log(myMap(testArray, function (num) { return 3 * num }));


/*
console.log(myMap (testArray, function (testArr) {
    let result = [];
    for (const element of testArray) {
         result.push(3 * element);
        
    }
    return result;

}));
*/

