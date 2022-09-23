"use strict";
/*eslint-disable*/


/*
write a function, multiplyEvens, that can be called with any number of arguments and returns the product of the even arguments
• do first using the arguments object • then using ...rest parameter
*/

multiplyEvens(1, 6, 3, 4, 17, 2)// → 48

function  multiplyEvens(...argsArr){
let prodEvens = 1
for (const num of argsArr) {
    if (num% 2 ===0){
        prodEvens=prodEvens*num
    }
}
return prodEvens;
}

console.log(multiplyEvens(1, 6, 3, 4, 17, 2));


