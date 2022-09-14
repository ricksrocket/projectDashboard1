"use strict"
/*eslint-disable*/

const prompt = require("prompt-sync")();

/*

• createBook, which will take title, author, and libraryID as inputs. It will create a new
  book object and return the newly created book. 

• findTitles, which will find all the book titles in libraryBooks and return them in an 
  alphabetically ordered array. 
  
• findAuthors, which will find all the authors in libraryBooks and return them in an alphabetically ordered array.

• findIDs, which will find all the libraryIDs in libraryBooks and return them in an alphabetically ordered array.

• Test these four functions using the Mocha test file: libraryBooksTest.js

• Include buttons with the following values and “titles” ( the part after the colon, which should 
  appear on mouseover)
        o Titles: list all titles, sorted alphabetically 
        o Authors: list all authors, sorted
*/
let libraryBooks = {};
let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];

function createBook(title, author, libraryID) {
    let newBook = {
        name: title,
        author: author,
        libraryId: libraryID

    }
    //library.push(newBook);
    return newBook;
}


const titles = ["Mockingjay: The Final Book of The Hunger Games", "The Road Ahead", "Walter Isaacson"];
const authors = ["Bill Gates", "Steve Jobs", "Suzanne Collins"];
const ids = [1254, 3245, 4264];
//const newBook = {title: const newBook = {title: "My New Book", author: "Me Too", libraryID: 1144};};

console.log(createBook("My New Book", "Me Too", 1144));
//console.log(library);

function findTitles() {
    let result = [];
    let min = ""
    for (let i = 0; i < library.length; i++) {
        result.push(library[i].title);
    }
    for (let i = 1; i < result.length; i++) {
        for (let j = 0; j < i; j++) {
            if (result[i] < result[j]) {
                let temp = result[i];
                result[i] = result[j];
                result[j] = temp;
            }
        }
    }
    return result;
}

console.log(findTitles());

function findAuthors (){
    let result = [];
    let min = ""
    for (let i = 0; i < library.length; i++) {
        result.push(library[i].author);
        //console.log(result)
    }
    for (let i = 1; i < result.length; i++) {
        for (let j = 0; j < i; j++) {
            if (result[i] < result[j]) {
                let temp = result[i];
                result[i] = result[j];
                result[j] = temp;
            }
        }
    }
    return result;
}

console.log(findAuthors());


function findIDs (){
    let result = [];
    let min = ""
    for (let i = 0; i < library.length; i++) {
        result.push(library[i].libraryID.toString());
        //console.log(result)
    }
    for (let i = 1; i < result.length; i++) {
        for (let j = 0; j < i; j++) {
            if (result[i] < result[j]) {
                let temp = result[i];
                result[i] = result[j];
                result[j] = temp;
            }
        }
    }
    return result;
}
console.log(findIDs());