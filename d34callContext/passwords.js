"use strict";
/* exports at end of file since exporting an object, which can only be referenced after definition */
/* eslint-disable */



/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
/*
let user = {
    name: 'John',

    loginOk() {
        console.log(`${this.name} logged in`);
    },

    loginFail() {
        console.log(`${this.name} failed to log in`);
    },
};
*/

function askPassword(ok, fail, password) {
    if (password == "rockstar")  return ok();
       
    else return fail();

}
let user = {
    name: "John",
    loginOk() {
        return `${this.name} logged in`;
    },
    loginFail() {
        return `${this.name} failed to log in`;
    }
};

/*
let user2 = {
    name: 'John',

    login(result) {
        console.log(this.name + (result ? ' logged in' : ' failed to log in'));
    }
};
*/

function askPassword2(ok, fail, password) {
    if (password == "rockstar")  return ok();
    else  return fail();
}

let user2 = {
    name: "John",

    login(result) {
        return  this.name + (result ? " logged in" : " failed to log in");
    }
};

//console.log(askPassword(user.loginOk.bind(user), user.loginFail.bind(user), "sss"))


module.exports = { askPassword, user, askPassword2, user2 }; //add all of your function names here that you need for the node mocha tests


//console.log(user2.login(false));

