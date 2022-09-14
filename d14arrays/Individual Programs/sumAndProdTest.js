"use strict";
const assert = require("assert");

/*eslint-disable*/

/* Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10,
 and multiply([1,2,3,4]) should return 24. *?

/* import from functions.js module */

const functionsModule = require("./sumAndProd.js");
const sum = functionsModule.sum;
const multiply = functionsModule.multiply;


describe("sum and multiply", function () {
    it("tests sum of 1 2 3 and 1 2 3 4", function () {
        assert.strictEqual(sum([1, 2, 3]), 6);
        assert.strictEqual(sum([1, 2, 3, 4]), 10);
    });
    it("tests multiply 3 2 10 and 1 2 3 4", function () {
        assert.strictEqual(multiply([3, 2, 10]), 60);
        assert.strictEqual(multiply([1, 2, 3, 4]), 24);
    });
});