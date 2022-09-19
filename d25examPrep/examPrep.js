"use strict"
/*eslint-disable*/
/*
W2D5 Exam prep and practice
Array method practice: (These provide practice prior to the exam.) Write functions that use map, 
filter, find, include, and reduce functions to carry out the operations below on these two arrays. 
Your functions must be pure (no changes to the arguments).
Use the Mocha test file, arrayPracticeTests.js, for the following functions. You should add Mocha
tests to the file for the reduce functions.

map :
- double numbers
- double age
filter:
- filter all even numbers
- filter all age > 10
- find even, include even
- find age > 10, include age > 10
reduce
- find sum of numbers
- find average of numbers
- find max of numbers
- find max for ages
- use a chain of map filter reduce to find the average age of people with even number ages
- use a chain of map filter reduce to find the average age of people with odd number ages
*/


/*
function doubleAge2(arr) {
    let copied = arr.filter(obj => {return true}
    return arr.map(obj => {
        obj.age = obj.age * 2;
        return obj;
    })
};
*/



const numArray = [5, 0, 7, 77, -20, 300, 51, 2];

const peopleArray = [
    { name: "Sam", age: 15 },
    { name: "William", age: 6 },
    { name: "Lucy", age: 13 },
    { name: "Barney", age: 80 }
]

function doubleNumbers(arr) {
    return arr.map((element) => {
        return element * 2;
    })
};

console.log(doubleNumbers(numArray));

//-------------------------------------------------

function filterEven(arr) {
    let evenArr = arr.filter(num => {
        if (num % 2 === 0) {
            return true
        }
        else return false
    })
    return evenArr;
}

console.log(filterEven(numArray));

function findEven(arr) {
    let firstEven = arr.find(num => {
        if (num % 2 === 0) {
            return true
        }
        else return false
    })
    return firstEven;
}

console.log(findEven(numArray));

let oddArr = [1, 3, 5, 7, 9];

function includesEven(arr) {
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

console.log(includesEven(numArray));


function doubleAge(arr) {
    return arr.map(({ name, age }) => (
        { name: name, age: 2 * [age] }));
};


console.log(doubleAge(peopleArray));
console.log(peopleArray);

function filterOver10(arr) {
    return arr.filter(obj => {
        return (obj.age > 10);
    }
    )
};

console.log(filterOver10(peopleArray));

function findAge(arr) {
    return arr.find(obj => {
        return obj.age > 10;
    }
    )
};

console.log(findAge(peopleArray));


function findEvenAge(arr) {
    let firstEven = arr.find(obj => {
        if (obj.age % 2 === 0) {
            return true
        }
        else return false
    })
    return firstEven;
}


console.log(peopleArray);
console.log(findEvenAge(peopleArray));


function includesEvenAge(arr){
        let firstEven = arr.filter(obj => {
            if (obj.age % 2 === 0) {
                return true
            }
            else return false
        })
        return firstEven;

}

console.log(includesEvenAge(peopleArray))



//-------------------- reduce functions below


function findSum(arr) {
    return arr.reduce((prev, curr) => {
        return prev + curr
    }, 0);
}

const array1 = [1, 2, 3, 4];
console.log(findAvg(array1));

function findAvg(arr) {
    const sum = arr.reduce((prev, curr) => {
        return prev + curr
    }, 0);
    return sum/arr.length;
}

function minValue(arr) {
    const min = arr.reduce((prev, curr) => {
        return prev > curr ? prev : curr;
    });
    return min;
}

console.log(minValue([4, 1, 2, 7, 6]));

/*
const kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
];

const reformattedArray = kvArray.map(({ key, value }) => (
    { [key]: value }));

console.log(kvArray);
console.log(reformattedArray);


//console.log(peopleArray)
//console.log(doubleNumbers(numArray));
//console.log(numArray);

//console.log(peopleArray);




//console.log(doubleNumbers(numArray));
*/
/*
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map(item => item.name);

console.log(names); // John, Pete, Mary
*/
