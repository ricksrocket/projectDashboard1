"use strict";
const assert = require("assert");

/*eslint-disable*/

/*  import from functions.js module*/

const functionsModule = require("./findLongestWord.js");
const findLongestWord = functionsModule.findLongestWord;


describe("findLongestWord", function () {
    it("tests longest", function () {
        assert.strictEqual(findLongestWord(["this", "is", "a", "test", "longest"]), 7);
    });
    it("tests longest with spaces", function () {
        assert.strictEqual(findLongestWord(["this", "is", "a word with spaces", "test", "longest"]), 18);
    });
    it("tests longest with equal length words", function () {
        assert.strictEqual(findLongestWord(["is", "is", "is", "is", "is"]), 2);
    });
    it("tests longest with some words equal length", function () {
        assert.strictEqual(findLongestWord(["this", "is", "this", "is", "is"]), 4);
    });
});