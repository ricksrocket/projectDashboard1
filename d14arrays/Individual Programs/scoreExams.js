"use strict"
/*
module.exports = { scoreExams };
*/

/*eslint-disable*/

/**
 * 
 * @param {Array} studentAnswers is an array of student exam answers
 * @param {Array} correctAnswers is an array of correct exam answers 
 * @returns {Array} this function returns an array holding the scores of each student.
 * 
 */

 /*
Write a function, scoreExams, that takes an array of arrays of student answers and 
an array of the correct answers. It should compare each student’s answers against 
the correct answers and return an array holding the scores of each student. 
The score for each student is a count of the number of correct answers (i.e., matches with
the key of correct answers). 

For example, 
const studentAnswers = [ [1, 1, 2, 4], [2, 1, 2, 2], [3, 1, 3, 4] ]; 
const correctAnswers =   [3, 1, 2, 4]; 
scoreExams(studentAnswers, correctAnswers)); --> [3,2,3]

*/


const studentAnswers = [
    [1, 1, 2, 4],
    [2, 1, 2, 2],
    [3, 1, 3, 4]
];




const correctAnswers = [3, 1, 2, 4];



function scoreExams(studentAnswers, correctAnswers) {
    let examScores = [];

    for (let i = 0; i < studentAnswers.length; i++) {
        let sum = 0;

        for (let j = 0; j < studentAnswers[i].length; j++) {
            if (studentAnswers[i][j] === correctAnswers[j]) {
                sum = sum + 1;
            }
            examScores[i] = sum
        }
    }
    return examScores;
}
console.log(scoreExams(studentAnswers, correctAnswers));

