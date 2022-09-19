"use strict";
/* eslint-disable */

let arr = [1, 5, 16, 3, 108];

arr.forEach(function (element) {
    if (element % 2 === 0) {
        console.log(element);
    }
})

console.log(arr);
arr.forEach((element => {
    if (element % 2 === 0) {
        console.log(element);
    }

}));

//function logEvens(arr){};

/*
const numbers = [1, 5, 18, 2, 77, 108];
➢ use filter, find, and findIndex to find ➢ all the even numbers
➢ the first even number
➢ the index of the first even number
*/

const numbers = [1, 5, 18, 2, 77, 108];


let result = numbers.filter(num => {
    if (num % 2 === 0) {
        return true;
    }
      else return false;
});

let result1 = numbers.find(num => {
    if (num % 2 === 0) {
        return true;
    }
      else return false;
});

let result2 = numbers.findIndex(num => {
    if (num % 2 === 0) {
        return true;
    }
      else return false;
});

function isEven (num) {
    if (num % 2 === 0) {
        return true;
    }
      else return false;
}

const evens = numbers.filter(isEven);
console.log(evens);
console.log(numbers.find(isEven));
console.log(numbers.findIndex(isEven));
