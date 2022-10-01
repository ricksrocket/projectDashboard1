"use strict";
/*eslint-disable*/

/* global Account require  */
const acc = require("./account.js");//with node need the name of your file with your functions here
const Account = acc.Account;  //do this for all of the functions used in the Mocha tests

/* exports at end of file since exporting an object, which can only be referenced after definition   */


//class SavingsAccount{};

class SavingsAccount extends Account {
    constructor(number, interest) {
        super(number);
        this._interest = interest;

    }

    addInterest() {
        return this._balance = this._balance * (1 + this._interest / 100);
    }


    getInterest() {
        return this._interest;
    }

    setInterest(interest) {
        this._interest = interest;
    }

    toString() {
        return "SavingsAccount " + this._number + ": balance: " + this._balance + " interest: " + this._interest;
    }

    endOfMonth() {
        this.addInterest();
        return "Interest added SavingsAccount " + this._number + ": balance: " + (this._balance) + " interest: " + this._interest;
    }

}
//SavingsAccount 1: balance: 105 interest: 5
//"Interest added SavingsAccount 1: balance: 105 interest: 5"


const savings = new SavingsAccount(1, 5);


savings.setInterest(5);
savings.deposit(100);
savings.addInterest();
console.log(savings.getBalance());//105
console.log(savings.toString());
console.log(savings.endOfMonth());




/* global exports */
exports.SavingsAccount = SavingsAccount;



/*


class SavingsAccount extends Account{
    constructor(number, interest) {
        super(number);
        this._interest = interest;

    }

    addInterest() {
        return this._balance*this.interest/100
    }


    getInterest() {
        return this._interest;
    }

    setInterest(interest) {
        this._interest = interest;
    }
    }






/* global exports */
//exports.SavingsAccount = SavingsAccount;