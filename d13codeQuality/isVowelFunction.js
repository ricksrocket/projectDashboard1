"use strict";
module.exports = {isVowel};

/**
 * 
 * @param {String} singleChar is a single character string
 * @returns {boolean} true is the character input is a vowel. false if not a vowel
 */



function isVowel(singleChar) {
    singleChar = singleChar.toLowerCase();
    if (singleChar === "a" || singleChar === "e" || singleChar === "i" ||
        singleChar === "o" || singleChar === "u") {
        return true
    } else return false;

}
