"use strict";
/*eslint-disable*/
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { findTitles, findAuthors, findIDs, createBook }; //add all of your function names here that you need for the node mocha tests

/*
o	createBook, which will take title, author, and libraryID as inputs.  It will create a new book object and add it to the library, 
which will be represented as a global array named libraryBooks.  createBook should return the newly created book.
o	findTitles, which will find all the book titles in libraryBooks and return them in an alphabetically ordered array.
o	findAuthors, which will find all the authors in libraryBooks and return them in an alphabetically ordered array.
o	findIDs, which will find all the libraryIDs in libraryBooks and return them in an alphabetically ordered array.
*/

let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];

/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function showTitles() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const titles = findTitles();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    titles.sort();
    const titleString = titles.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;
}

/**
 * 
 * @return {object} array holding all titles as elements
 */
function findTitles() {
    let titles = [];
    for (let i = 0; i < library.length; i++) {
        titles.push(library[i].title);
    }
    for (let i = 1; i < titles.length; i++) {
        for (let j = 0; j < i; j++) {
            if (titles[i] < titles[j]) {
                let temp = titles[i];
                titles[i] = titles[j];
                titles[j] = temp;
            }
        }
    }
    return titles;
}

/**
 * createBook, which will take title, author, and libraryID as inputs.  It will create a new book object and add it to the library, 
which will be represented as a global array named libraryBooks.  createBook should return the newly created book.
 */

function createBook(title, author, libraryID) {
    let newBook = {
        title: title,
        author: author,
        libraryID: libraryID

    }
    //library.push(newBook);
    return newBook;
}

/**
 * @returns {undefined} no return
 * Event handler for Add book button.  Creates and adds book to the library
 */
function addBook() {
    const title = document.getElementById("title").value; //retrieves the book title from the title textbox
    const author = document.getElementById("author").value;
    const newID = library.length + 5000;
    let book = createBook(title, author, newID);
    console.log(book);
    library.push(book)
    alert("You added a new book to the library. \n" + "Title: " + title + "\nAuthor: " + author);
    // console.log("title is: ", title.value);
    //alert("title:  " + title.value);

    // hack to get a unique id for now
    //finish the implementation -- get the author, create a book object, and add to the library array
}

//----------------------------------------------------------------------------------
function showAuthors() {


    const authors = findAuthors();

    authors.sort();
    const authorString = authors.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = authorString;
}
/**
 * 
 * @returns {Array} find all  authors in libraryBooks and return them in alphabetically ordered array.
 */
function findAuthors() {
    let authors = [];
    let min = ""
    for (let i = 0; i < library.length; i++) {
        authors.push(library[i].author);
        //console.log(result)
    }
    for (let i = 1; i < authors.length; i++) {
        for (let j = 0; j < i; j++) {
            if (authors[i] < authors[j]) {
                let temp = authors[i];
                authors[i] = authors[j];
                authors[j] = temp;
            }
        }
    }
    return authors;
}

//---------------------------------------------------------------------
/**
 * 
 * @returns {Array} find all the libraryIDs in libraryBooks and return them in an alphabetically ordered array.
*/
function findIDs() {
    let result = [];
    let min = ""
    for (let i = 0; i < library.length; i++) {
        result.push(library[i].libraryID.toString());
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

//----------------------------------------------------------------------------------
function showIDs() {


    const ids = findIDs();

    ids.sort();
    const idsString = ids.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = idsString;
}

