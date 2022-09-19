"use strict"
/*eslint-disable*/

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator }; //add all of your function names here that you need for the node mocha tests


function filterRange(arr, a, b) {
    let result = arr.filter((num) => {
        if (num >= a && num <= b) {
            return true;
        }
        else return false;
    });
    return result;
  }

 
  function filterRangeInPlace(arr, a, b) {
    let result = arr.filter((num) => {
        if (num >= a && num <= b) {
            return true;
        }
        else return false;
    });
    return result;

  }
 

  function Calculator() {
  }

  function unique(arr) {

    let uniqueItems = [];
    for (const element of arr) {
        if (uniqueItems.includes(element)) {
            uniqueItems.push(element);
        }
    }
    return uniqueItems;
  }


  function groupById(array) {
    return arr.reduce((obj, value) => {
        obj[value.id] = value;

        return obj;
    }, {})
  }