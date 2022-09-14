"use strict";
const assert = require("assert");

/*eslint-disable*/

/* import from functions.js module */

const functionsModule = require("./reverseArrayTypes.js");
const reverseArray = functionsModule.reverseArray;
const reverseArrayInPlace = functionsModule.reverseArrayInPlace;


describe("reverseArray", function () {
    it("tests reverseArray odd number elements", function () {
        assert.deepEqual(reverseArray(["A", "B", "C"]), ['C', 'B', 'A']);
    });
    it("tests reverse even number elements", function () {
        assert.deepEqual(reverseArrayInPlace(["A", "B", "C", "D"]), ['D', 'C', 'B', 'A']);
        assert.deepEqual(reverseArray(["A", "B", "C", "D"]), ['D', 'C', 'B', 'A']);
    });
    it("tests reverse odd number elements", function () {
        assert.deepEqual(reverseArrayInPlace([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
        assert.deepEqual(reverseArray([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
    });
    it("tests that the original array is returned", function () {
        const testArr = [1, 2, 3, 4, 5];
        assert.strictEqual(reverseArrayInPlace(testArr), testArr); //element order may be different, but it is the same reference
    });
});