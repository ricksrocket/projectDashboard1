"use strict";
/*eslint-disable*/


function extractCurrencyValue (str) {
    let newStr=""
    const len=str.length;
    for (let i=1; i<len; i++) {
        newStr= newStr+ str.charAt(i);

    }
    return Number(newStr);
    }
console.log(extractCurrencyValue("$129.90")) ;
