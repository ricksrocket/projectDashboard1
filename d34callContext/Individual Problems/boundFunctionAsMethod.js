"use strict";
/*eslint-disable*/


function f() {
    console.log(this); // ?g
}

let user = {
    g: f.bind(array)
};

user.g();

