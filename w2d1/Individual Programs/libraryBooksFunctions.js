"use strict";
/*eslint-disable*/
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */

module.exports = {createBook: createBook, findTitles: findTitles, findAuthors: findAuthors, findIDs:findIDs  }; //add all of your function names here that you need for the node mocha tests
 


function createBook(title, author, libraryID) {
    let newBook = {
        title: title,
        author: author,
        libraryID: libraryID

    }
    //library.push(newBook);
    return newBook;
}

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


//----------------------------------------------------------------------

function findAuthors() {
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
//----------------------------------------------------------------------
function findIDs() {
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