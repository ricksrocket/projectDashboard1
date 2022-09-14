"use strict";
const assert = require("assert");

/*eslint-disable*/

/* import from functions.js module */

const functionsModule = require("./scoreExams.js");
const scoreExams = functionsModule.scoreExams;

describe("score exam", function () {
    const studentAnswers = [[1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4]];
    const correctAnswers = [3, 1, 2,4];
    it("exam with 3 students", function () {
        assert.deepEqual(scoreExams(studentAnswers, correctAnswers), [3,2,3]);
    });
    it("exam with 3 students: one student has all incorrect answers", function () {
        assert.deepEqual(scoreExams( [[1, 1, 2,4], [2, 1, 2,2], [1,2, 3,1]], correctAnswers), [3,2,0]);
    });
    it("exam with 3 students: one student has all correct answers", function () {
        assert.deepEqual(scoreExams( [[1, 1, 2,4], [2, 1, 2,2],[3, 1, 2,4]], correctAnswers), [3,2,4]);
    });
});