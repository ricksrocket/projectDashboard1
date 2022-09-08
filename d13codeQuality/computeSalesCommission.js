"use strict";
module.exports = {computeSalesCommission };
/*eslint-disable*/

/**
 * 
 * @param {boolean} salaried . True is salesman on salary payroll; false if not
 * @param {Number} sales . Amount of the salesman's sales in dollars
 * @returns {Number} sales commission figure
 */

function computeSalesCommission(salaried, sales) {
    let commission = 0;
    salaried = salaried.toString();
    sales = +sales;
    if (salaried === "true") {
        console.log("Yes");
        if (sales < 300) {
            commission = 0;
        }
        else if (sales >= 300 && sales <= 500) {
            commission = 0.01 * sales;
        }
        else if (sales > 500) {
            commission = 5 + 0.02 * (sales - 500)
        }

    }
    else if (salaried === "false") {
        if (sales >= 300 && sales < 500) {
            commission = 0.02 * sales;
        }
        else if (sales >= 500) {
            commission = 10 + 0.03 * (sales - 500);
        }
    }
    return commission;
}