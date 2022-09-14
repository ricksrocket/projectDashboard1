"use strict";
/*eslint-disable*/

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/ 
/*
module.exports = {double, times100, myMap }; //add all of your function names here that you need for the node mocha tests
*/
/**
 *@returns {number} double the input
 */

function double(num){return 2 * num};

/**
 * @returns {number} 100 times the input
 */
 function times100(num){return 100 * num};


/**
 * @returns {Array} creates a new array with function mapped to each element
 */

function myMap(arr, userFunction)  {
        let result = [];
        for (const element of arr) {
            result.push(userFunction(element))
        }
        return result;
    
    };
    
