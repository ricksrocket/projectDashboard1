"use strict";
/*eslint-disable*/

function User(firstname, lastname, birthDate) { this.firstname = firstname;
    this.lastname = lastname;
    this.birthDate = birthDate;
}

    // best solution
    User.prototype.getFullName = getFullName;
    User.prototype.getAge = getAge;


/* another way_____________________________________________

*/

    let user1 = new User('John', 'Smith', new Date('2000-10-01'));
    let user2 = new User('Edward', 'Hopkins', new Date('1991-11-14'));

    function getFullName() { 
        return this.firstname + ' ' + this.lastname;}


    function getAge() {return new Date().getFullYear() - this.birthDate.getFullYear();}

    //proto = userMethods;

    let userMethods = {

     getFullName() { return this.firstname + ' ' + this.lastname;},

     getAge() {return new Date().getFullYear() - this.birthDate.getFullYear();}

    };

   // user1.__proto__ = userMethods;
    //user2.__proto__ = userMethods;


  
    console.log(user2.getAge());
