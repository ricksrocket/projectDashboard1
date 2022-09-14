"use strict";
const assert = require("assert");

/*eslint-disable*/

/* import from functions.js module */

const functionsModule = require("./generateArray.js");
const generateArray = functionsModule.generateArray;

describe("generate array", function () {
    const expected33 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const expected23 = [ [1, 2, 3], [4, 5, 6]];
    const expected21 = [ [1], [2]];
    it("expected33", function () {
        assert.deepEqual(generateArray(3,3), expected33);
    });
    it("expected23", function () {
        assert.deepEqual(generateArray(2,3), expected23);
    });
    it("expected21", function () {
        assert.deepEqual(generateArray(2, 1), expected21);
    });
});