"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = { inArray, inBetween, byField, makeArmy }; //add all of your function names here that you need for the node mocha tests


/**
 * 
 * @param {Array} arrMatches holding values
 * @returns {Function} returns a function that tests whether its argument is in the arr
 * 
 */
 function inArray(arrMatches) {
    return function (element) {
        return arrMatches.includes(element);
    };
}

/**
 * 
 * @param {number} low is bottom of range
 * @param {number}  high is top of range
 * @returns {Function} returns a function that tests whether its argument is inside the range
 * 
 */
function inBetween(low, high) {
    return function (element) {
        return element >= low && element <= high;
    };
}

/**
 * 
 * @param {String} objPropName is a property on object to be sorted
 * @returns {Function} sorting function
 */
function byField(objPropName) {
    return function (a, b) {
        if (a[objPropName] > b[objPropName]) return 1;
        if (a[objPropName] == b[objPropName]) return 0; // if values are equal
        if (a[objPropName] < b[objPropName]) return -1;
    }
}


/**
 * @returns {Function} closure that returns it's number
 */
function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let j = i;
        let shooter = function () {
            console.log("I am shooter ", j); return j;
        };
        shooters.push(shooter); // and add it to the array
        i++;
    }

    // ...and return the array of shooters
    return shooters;
}
//let army = makeArmy();

  //army[0](); // the shooter number 0 shows 10
  //army[5](); // and number 5 also outputs 10...