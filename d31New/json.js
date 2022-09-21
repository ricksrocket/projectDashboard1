"use strict";
/*eslint-disable*/

let user = {
    name: "John Smith",
    age: 35
  };

  let json = JSON.stringify(user);
  console.log(json);

  let newUser = JSON.parse(json);
  console.log(newUser);

