"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge, includesEvenNum, includesEvenAge }; //add all of your function names here that you need for the node mocha tests


function doubleNums(arr) {
    return arr.map(num => num * 2);
}

function doubleAges(arr) {

    return arr.map(({ name, age }) => (
        { name: name, age: 2 * [age] }));

}

function filterEven(arr) {

    let evenArr = arr.filter(num => {

        if (num % 2 === 0) {
            return true
        }
        else return false
    })
    return evenArr;

}

function filterOver10(arr) {

    return arr.filter(obj => {
        return (obj.age > 10);
    }
    )

}

function findEvenNum(arr) {

    let firstEven = arr.find(num => {
        if (num % 2 === 0) {
            return true
        }
        else return false
    })
    return firstEven;

}

function findEvenAge(arr) {
    let firstEven = arr.find(obj => {
        if (obj.age % 2 === 0) {
            return true
        }
        else return false
    })
    return firstEven;
}


function includesEvenNum(arr) {
    let includesEven = arr.filter(num => {
        if (num % 2 === 0) {
            return true
        }
        else return false
    })
    if (includesEven.length === 0) {
        return false
    }
    else return true

}

function includesEvenAge(arr) {
    let allEven = arr.filter(obj => {
        if (obj.age % 2 === 0) {
            return true
        }
        else return false
    })
    if (allEven.length ===0) {
        return undefined;
    }
    else return allEven;

};