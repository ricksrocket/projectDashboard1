"use strict";
/*eslint-disable*/

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];


//users.sort((a, b) => a.name > b.name ? 1 : -1);
//users.sort((a, b) => a.age > b.age ? 1 : -1);



function byField(objPropName) {
    return function (a, b) {
        if (a[objPropName] > b[objPropName]) return 1;
        if (a[objPropName] == b[objPropName]) return 0; // if values are equal
        if (a[objPropName] < b[objPropName]) return -1;
    }
}

//users.sort(byField('name'));
//console.log(users);

users.sort(byField('age'));
console.log(users);

function byField1(objKey) {
    return function (a, b) {
        if (a[objKey] > b[objKey]) return 1;
        if (a[objKey] == b[objKey]) return 0; // if values are equal
        if (a[objKey] < b[objKey]) return -1;
    }
}

function byField2(objKey) {
    return (a, b) => a[objKey] > b[objKey] ? 1 : -1;
}
