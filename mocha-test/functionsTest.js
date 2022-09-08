/*suppose you have many function to test and wants tests in a 
separate file*/

"use strict";
const assert = require("assert");

/* import from functions.js module */

const functionsModule = require("./functions.js");
const checkPrime = functionsModule.checkPrime;
const ssReverse = functionsModule.ssReverse;


describe("checkPrime returns true if argument is prime", function () {
    it("  37 is prime", function () {
        assert.strictEqual(checkPrime(37), true);
    });
    it("  77 is not prime", function () {
        assert.strictEqual(checkPrime(77), false);
    });
});

describe("ssReverse returns an array that is reversed", function () {
    it("[1, 2, 3, 4]", function () {
        assert.deepStrictEqual(ssReverse([1,2,3,4]), [4,3,2,1] );
    });
});
