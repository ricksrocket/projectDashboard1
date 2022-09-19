"use strict";
/*eslint-disable*/

/*
2. Make a defining table and function that will return the balance of a savings account 
that compounds interest monthly. Parameters for the function will be:
    • initial amount
    • annual interest rate (entered as Percent NOT as decimal)
    • number of years to compound
Do not look up mathematical formulas for how to compute compound interest. 
Use a for loop that will add the appropriate interest each month.
console.log("expect 110.47", compoundInterest(100, 10, 1));
console.log("expect 16470.09", compoundInterest(10000, 5, 10));

*/
//const prompt=require("prompt-sync")();
function compoundInterest (initAmt, annlInt, numYrs) {
    let total=initAmt;
    let int=annlInt/1200;
    const months = 12*numYrs;
    for (let i = 1; i<=months; i++) {
        total = total*(1+int);
    }

return total

}
console.log(compoundInterest(10000,5,10))