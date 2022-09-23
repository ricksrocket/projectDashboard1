//"use strict";
/*eslint-disable*/


const abc = {
    salute: "",
    greet: function () {
        this.salute = "Hello";
        console.log(this.salute); //Hello
        const setFrench = function (newSalute) { //inner function
            this.salute = newSalute;
        };
        setFrench("Bonjour");
        console.log(this.salute); //Bonjour?? }
    }
}
abc.greet(); //Hello Hello ???

//--------------------------------------------- arrow function fix

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList() {
        this.students.forEach((student) => {
            console.log(this.title + ': ' + student)
        });
    }
};
group.showList();

//---------------------------------------------   .bind(this) fix
let group1 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList() {
        this.students.forEach(function (students)  {
            console.log(this.title + ': ' + student)
        }.bind(this));
    }
};
group.showList();
