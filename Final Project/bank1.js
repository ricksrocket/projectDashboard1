"use strict";
/*eslint-disable*/

/* global exports require Account   SavingsAccount CheckingAccount */

/* exports at end of file since exporting an object, which can only be referenced after definition   */
    
const acc = require("./account.js");//with node need the name of your file with your functions here
const Account = acc.Account;  //do this for all of the functions used in the Mocha tests
const chk = require("./checkingaccount.js");
const CheckingAccount = chk.CheckingAccount;
const sav = require("./savingsaccount.js");
const SavingsAccount = sav.SavingsAccount; 


/*
class Bank{
    constructor() {
        this._accounts = []; // the account number
        //this._balance = 0.0;
    }


    addAccount() {
        //this.number = number
       //this._accounts.push(account);
        return 1

    }

    addSavingsAccount(interest) {

    }


    addCheckingAccount(overdraft){

    }
}

//let bank = new Bank();
//console.log(bank._accounts.length)
//bank.addAccount





/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//exports.Bank = Bank;
