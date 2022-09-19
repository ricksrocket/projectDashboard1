"use strict";
/*eslint-disable*/


/**
 * 
 * @param {String} str is a sting input to check for spam ("xxx" or "viagra")
 * @returns true if either "xxx" or "viagra" is found in the string
 */

function checkSpam(str) {
    str = str.toLowerCase();
    //strLower = str.replace(/ /g, "," );
    console.log(str);
    const target1 = "viagra";
    const target2 = "xxx"

    //console.log(str.indexOf(target1, 0));
    //console.log(str.indexOf(target2, 0));

    if (str.indexOf(target1, 0) === -1 && str.indexOf(target2, 0) === -1){
        return false;    
    } else return true

}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));
