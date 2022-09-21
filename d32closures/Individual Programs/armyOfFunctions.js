"use strict";
/*eslint-disable*/



function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let j = i
        let shooter = function () {
            console.log("I am shooter ", j); return j;
        };;
        shooters.push(shooter); // and add it to the array
        console.log(shooters);
        i++;
    }

    // ...and return the array of shooters
    return shooters;
}

let army = makeArmy();

// all shooters show 10 instead of their numbers 0, 1, 2, 3...
army[0](); // 10 from the shooter number 0
army[1](); // 10 from the shooter number 1
army[2](); // 10 ...and so on.

/*
function makeArmy1() {
    let shooters = [];
    

    let i = 0;
    while (i < 10) {
        let shooter = function () {
            console.log("I am shooter ", i); return i;
        };;
        shooters.push(shooter); // and add it to the array
        i++;
    }

    // ...and return the array of shooters
    return shooters;
}

let army1 = makeArmy();

army1[0](); // 10 from the shooter number 0
army1[1](); // 10 from the shooter number 1
army1[2](); // 10 ...and so on.


function inArray(arrMatches) {
    return function (element) {
        for (const matchNum of arrMatches) {
            if (element === matchNum) { return element }
        }
    }
}

*/