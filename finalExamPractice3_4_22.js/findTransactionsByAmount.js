"use strict";
/*eslint-disable*/


const bank = { transactionsDB: [], };
bank.transactionsDB = [
    { customerId: 1, customerTransactions: [10, 50, -40] },
    { customerId: 2, customerTransactions: [10, 10, -10] },
    { customerId: 3, customerTransactions: [25, -5, 55] }];

/*return array with all customers who had deposits greater than 20.  
array should contain objects with customerId and the transaction 
amount for each such transaction */



function findTransactionsByAmount(bank) {
    let resultArr = [];
    for (const custObj of bank.transactionsDB) {
        filterTransGT20(custObj);
    }

    function filterTransGT20(custObj) {

        for (const amount of custObj.customerTransactions) {
            //let resultObj = { custId: null, amount: null };
            if (amount > 20) {
                //resultObj.custId = custObj.customerId;
                //resultObj.amount = amount;
                //resultArr.push(resultObj)
                resultArr.push({ custId: custObj.customerId, amount: amount })
            }
            
        }
    }
    return resultArr;
}
//console.log("expect [{custId: 1, amount: 50}, {custId: 3, amount: 25}, {custId: 3, amount 55}] : ", findTransactionsByAmount(bank));
console.log(findTransactionsByAmount(bank));

