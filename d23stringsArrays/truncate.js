"use strict";
/*eslint-disable*/

function truncate(str, maxlength) {
    const len = str.length;
    let newStr = "";
    if (len <= maxlength) {
        return str;
    }
    else {
        for (let i = 0; i < maxlength-1; i++) {
            newStr = newStr + str.charAt(i);
        }
        newStr= newStr + "..."
        return newStr;
    }
}

console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));
