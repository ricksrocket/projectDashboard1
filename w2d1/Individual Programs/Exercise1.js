"use strict"
/*eslint-disable*/

/*
➢ Create 3 objects, student1, student2, student3
➢ property studentId : s101, s102, s103 respectively
➢property quizAnswers: [1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4] respectively
➢push the students into an array, quiz
➢ write a function, gradeQuiz, that takes the quiz array and an array of correct 
answers, e.g., [3,1,2,4] and returns an array that has scores for each student. 
Their score is the number of correct answers.

➢expect [ 3, 2, 3 ]
➢ use a helper function to compute the score for a given student
*/

const student1 = {
    studentId: "s101",
    quizAnswers: [1, 1, 2, 4]
}

const student2 = {
    studentId: "s102",
    quizAnswers: [2, 1, 2, 2]
};

const student3 = {
    studentId: "s103",
    quizAnswers: [3, 1, 3, 4]
};

const quiz = [student1, student2, student3];
const correctAnswers = [3, 1, 2, 4];

const scoreEach = (student, answerKey) => {
    const len = correctAnswers.length;//incorrect
    let scores = [];
    let sum = 0;
    for (let i = 0; i < len; i++) {
        if (student.quizAnswers[i] === correctAnswers[i]) {
            sum = sum + 1;
        }
    };
    return sum
}
/*
const gradeQuiz = (quizArray, list) => {
    const resultArray = [];
    for (const element of list) {
        resultArray.push(studentScore(element.quizAnswers, quizArray))
    }
    return resultArray
}

//console.log(gradeQuiz (correctAnswers, stuList));
//gradeQuiz (correctAnswers, quiz);
*/
console.log(scoreEach(student1,correctAnswers))
console.log(scoreEach (student1, correctAnswers ))
