//"use strict"; 
/*eslint-disable*/

//const prompt = require("prompt-sync")();

function askPassword(ok, fail, password) {
  //let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "John",

  login(result) {
    console.log(this.name + (result ? " logged in" : " failed to log in"));
  }
};

askPassword(
  () => user.login(true),
  () => user.login(false),
  "rockstar"
);


