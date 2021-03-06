'use strict';

var clock = {};

var hours = -1;
var mins = -1;
var secs = -1;

clock.months = ['January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December'];

clock.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

clock.displayDateTime = function(date) {

  date = date || new Date();

  var year = date.getFullYear(),
      month = date.getMonth(),
      d = date.getDate(),
      day = date.getDay();

  var h = date.getHours(),
      m = date.getMinutes(),
      s = date.getSeconds();

  if (h < 10) {
    h = '0' + h;
  }
  hours = h;

  if (m < 10) {
    m = '0'  + m;
  }
  mins = m;

  if (s < 10) {
    s = '0' + s;
  }
  secs = s;

  var sDate = [clock.days[day], clock.months[month], d, year].join(' '),
    sTime =  [h, m, s].join(':'),
    sDateTime = sDate + ' ' + sTime;

  // TODO scope to current view
  $('.clock-date-time').html(sDateTime);
  $('.clock-date').html(sDate);
  $('.clock-time').html(sTime);

};

clock.start = function() {
  setInterval(clock.displayDateTime, 1000);
};

clock.getCurrentTime = function() {
    return [hours, mins, secs]; // array of hr and min in 24hr format
};

module.exports = clock;
