"use strict";
module.exports = {checkPrime, ssReverse };

/**
 * prime numbers have only two factors; 1 and themselves
 * @param {Number} num is an integer
 * @returns {boolean} true is number is prime, else false
 */

function checkPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    } return true;
}

function ssReverse(testArray) {
    testArray = testArray.reverse();
    return testArray;
}
/*console.log(checkPrime(77));
console.log(ssReverse([1, 2, 3, 4]))*/
