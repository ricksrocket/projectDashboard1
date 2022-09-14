/*eslint-disable*/

const prompt = require("prompt-sync")();
let commission;
let salaried = prompt("Is the salesman salaried?: y/n  ");
let sales = prompt("Enter the sales amount in $  ");
console.log(salaried, sales);
if (salaried === "y") {
    if (sales < 300) {
        commission = 0;
    }
    else if (sales >= 300 && sales <= 500) {
        commission = 0.01 * sales;
    }
    else if (sales > 500) {
        commission = 0.02 * sales;
    }
}
else if (salaried === "n") {
    if (sales > 300 && sales < 500) {
        commission = 0.02 * sales;
    }
} if (sales >= 500) {
    commission = 0.03 * sales;
}
console.log(commission);