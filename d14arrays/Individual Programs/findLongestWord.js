"use strict";

module.exports = { findLongestWord };

/*eslint-disable*/

/**
 * The function findLongestWord() takes an array of words and returns the length of the longest one.
 * @param {Array} arr is an array of words
 * @returns {Number} maxLength is the length (number of characters including spaces) of the longest word.
 */

function findLongestWord(arr) {
    let maxLength = 0;

    for (const element of arr) {
        if (element.length > maxLength) {
            maxLength = element.length;
        }
    }

    return maxLength;
}

/*
console.log(findLongestWord(["them", "delivery", "basic", "spite", "contrast", "prove", "faithful", "addicted", "space", 
"concert", "fountain", "deprivation", "witch", "undertake", "basketball"]));


console.log(findLongestWord(["this", "is", "a", "test", "longest"]));*/
