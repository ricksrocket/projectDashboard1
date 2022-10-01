"use strict";
/*eslint-disable*/


  function Clock({ template }) {
  
    let timer;
  
    function render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    Clock.prototype.stop = function() {
      clearInterval(timer);
    };
  
    Clock.prototype.start = function() {
      render();
      timer = setInterval(render, 1000);
      setTimeout(() => {
        clearInterval(timer);
        console.log('stop');
    }, 4000);
    };
  
  }
  let clock = new Clock({template: 'h:m:s'});
  clock.start();

  console.log(clock)

/*
  setTimeout(() => {
    clearInterval(timerId);
    console.log('stop');
}, 5000);
*/