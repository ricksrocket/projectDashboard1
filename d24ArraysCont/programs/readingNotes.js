"use strict";
/*eslint-disable*/



let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
];

let user = users.find(obj => obj.id == 1);

//console.log((user.name)); // John
//console.log((users)); // 

let users2 = [
    { id: 4, name: "Tom" },
    { id: 5, name: "Dick" },
    { id: 6, name: "Harry" }
]

users.push(users2);
console.log(users);
console.log(users[0]["name"]);



console.log(users[3][2]["id"]+ ": " + users[3][2]["name"]); // 
//console.log(users[0][2].name);

users[3][2]["name"] = "Jane";// 
console.log(users);





