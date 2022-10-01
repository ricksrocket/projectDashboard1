"use strict";
/*eslint-disable*/

class Counter {
    constructor(count=0){

        
    }
  
    up () {
      return ++this.count;
    };
    down () {
      return --this.count;
    };
  }
  
  let counter = new Counter();
  
  console.log( counter.up() ); 
  console.log( counter.up() ); 
  console.log( counter.down() );  
  

    /* Rewrite this code to use the  __proto__ property instead of the 
    constructor function. (Draw the object diagram - on scratch paper)
 */
