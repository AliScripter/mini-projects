'use strict';

let $ = document;
let hourEl = $.querySelector('#hour');
let minuteEl = $.querySelector('#minute');
let secondsEl = $.querySelector('#seconds');

setInterval(function () {
  let myTime = new Date();
  let myHourse = myTime.getHours();
  let myMin = myTime.getMinutes();
  let mySec = myTime.getSeconds();

  if (myHourse < 10) {
    myHourse = '0' + myHourse;
  }
  if (myMin < 10) {
    myMin = '0' + myMin;
  }
  if (mySec < 10) {
    mySec = '0' + mySec;
  }

  hourEl.innerHTML = myHourse;
  minuteEl.innerHTML = myMin;
  secondsEl.innerHTML = mySec;
}, 1e3);
