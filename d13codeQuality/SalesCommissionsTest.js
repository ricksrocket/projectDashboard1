"use strict";
const assert = require("assert");
/*eslint-disable*/

/* import from functions.js module */

//const functionsModule = require("./isVowelFunction.js");
//const isVowel = functionsModule.isVowel;


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

describe("test of ComputSalesCommission", function () {
    it("tests salaried and 200 sales", function () {
        assert.strictEqual(computeSalesCommission(true, 200), 0);
    });
    it("tests not salaried and 200 sales", function () {
        assert.strictEqual(computeSalesCommission(false, 200), 0);
    });
    it("tests salaried and 300 sales", function () {

        assert.strictEqual(computeSalesCommission(true, 300), 3);
    });
    it("tests not salaried and 300 sales", function () {
        assert.strictEqual(computeSalesCommission(false, 300), 6);
    });
    it("tests salaried and 3500 sales", function () {
        assert.strictEqual(computeSalesCommission(true, 3500), 65);
    });
    it("tests not salaried and 3500 sales", function () {
        assert.strictEqual(computeSalesCommission(false, 3500), 100);
    });
});