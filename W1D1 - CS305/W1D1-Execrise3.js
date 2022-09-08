const prompt=require("prompt-sync")();
let initAmt=prompt("What is the initial amount?: ");
let annlInt=prompt("What is the annual interest in percent?: ");
let numYrs=prompt("What is the number of years?: ");


    let total=initAmt;
    let int=annlInt/1200;
    const months = 12*numYrs;
    for (let i = 1; i<=months; i++) {
        total = total*(1+int);
    }

console.log(total);
