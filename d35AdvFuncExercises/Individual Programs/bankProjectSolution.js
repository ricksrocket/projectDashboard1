"use strict";
/*eslint-disable*/

/*
In the following code the transactionsDB is publicly accessible to any code that has 
access to the bank object. 

Instead of using the object literal for bank, write a makeBank function that will encapsulate
and return the bank object. 

Make the transactionsDB private by making it a local variable in the makeBank function instead 
of a property on the bank object. (Functions that construct and return complex objects like this 
are often call “object factories.) 

Use the mocha test file, bankTests.js to test your solution. 

If you are unsure of what this means to make transactionsDB a private variable review the 
makeCounter example. We want to access transactionsDB in an analogous manner to how we 
accessed counter. Even better, review the "Counter object" task.
*/

function makeBank() {
    let bank = { bankBalance: null, };

    let transactionsDB = [
        { customerId: 1, customerTransactions: [10, 50, -40] },
        { customerId: 2, customerTransactions: [10, 10, -10] },
        { customerId: 3, customerTransactions: [5, -5, 55] }];

    bank.bankBalance = () => {

        let getCustIdBalance = (id) => {
            const customer = transactionsDB.find(customer => customer.customerId === id);//customer is customerObj of array
            let balance = 0;
            for (const trans of customer.customerTransactions) { balance = balance + trans; }
            return balance;

        }

        let total = 0;
        for (const trans of transactionsDB) {
            total = total + getCustIdBalance(trans.customerId);
        }
        return bank.bankBalance = total;
    }

    return bank

};


const bank = makeBank();
console.log(bank.bankBalance());
console.log(bank.transactionsDB in bank)
console.log(makeBank());
