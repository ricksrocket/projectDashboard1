"use strict";
/*eslint-disable*/


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};


function topSalary(salaries) {

    let topSalary = 0;
    let topName = null;

    for (const [name, salary] of Object.entries(salaries)) {
        if (salary > topSalary) {
            topSalary = salary;
            topName = name;
        }
    }

    return topName;
}

function lowSalary(salaries) {

    let minSalary = 1 / 0;
    let minName = null;

    for (const [name, salary] of Object.entries(salaries)) {
        if (salary < minSalary) {
            minSalary = salary;
            minName = name;
        }
    }

    return minName;
}

function statSalary(salaries) {
    let minSalary = 1 / 0;
    let minName = null;
    let maxSalary = 0;
    let maxName = null;
    let count = 0
    let sum = 0;
    let average;

    for (const [name, salary] of Object.entries(salaries)) {
        sum = sum + salary;
        if (salary < minSalary) {
            minSalary = salary;
            minName = name;
        }
        if (salary > maxSalary) {
            maxSalary = salary;
            maxName = name;
        }
        if (salary > 0) { count++ }
    }
    average = Math.round((sum / count) * 100) / 100;

    return [minSalary, maxSalary, average];
}

console.log(Object.entries(salaries));
console.log(topSalary(salaries));
console.log(lowSalary(salaries));
//console.log(sumSalary(salaries));
console.log(statSalary(salaries));





