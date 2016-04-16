'use strict';

//var context = null;

var taken = "../images/pill_taken.png";
var not_taken = "../images/pill_not_taken.png";
var AllMedication = [
    { name: "Panadol", quantity: "1", time: "1421", instructions: "", takenStatus: taken },
    { name: "Donepezil", quantity: "2", time: "1219", instructions: "", takenStatus: taken },
    { name: "Formetorolol", quantity: "4", time: "1330", instructions: "", takenStatus: not_taken },
    { name: "Prozac", quantity: "25ml", time: "1500", instructions: "", takenStatus: taken },
    { name: "Ventolin", quantity: "3", time: "1800", instructions: "", takenStatus: not_taken }
];

var Router = require('./framework/router'),
  WatchFace = require('./framework/watchFace'),
  eventHub = require('./framework/eventHub'),
  pages = require('./pages'),
  notifications = require('./watch-notifications'),
  WatchNotificationHandler = require('./framework/watchNotificationHandler'),
  clock = require('./framework/clock');

function App() {
  this.vent = eventHub;
  this.router = new Router(pages);
  this.watchFace = new WatchFace();
  this.notificationHandler = new WatchNotificationHandler(notifications);
}

App.prototype.navigate = function (route) {
  this.router.navigate(route, true);
};

App.prototype.showPage = function(page) {
  if (this.activePage) {
    this.activePage.remove();
  }

  this.notificationHandler.hideNotification();

  this.activePage = page;

  // TODO make this work with the constructor e.g. this.activePage = new New();
  $('#watch-face').html(this.activePage.render().el);
  this.vent.trigger('showPage');
};

App.prototype.configureButtons = function () {
  this.activePage.stopListening(); // NOTE do this here to prevent duplicate listeners
  if (this.notificationHandler.activeNotification) {
    this.notificationHandler.activeNotification.configureButtons();
  } else if (this.activePage) {
    this.activePage.configureButtons();
  }
};

App.prototype.setupEventHandlers = function () {
  this.listenTo(eventHub, 'showPage', this.configureButtons);
  this.listenTo(eventHub, 'showNotification', function (opts) {
    // TODO delegate/proxy the event instead?
    this.notificationHandler.showNotification(opts);
    this.configureButtons();
  });
  this.listenTo(eventHub, 'hideNotification', function (opts) {
    // TODO delegate/proxy the event instead?
    this.notificationHandler.hideNotification();
    this.configureButtons();
  });
};

App.prototype.start = function() {

  clock.start();
  var obj = this;
  setInterval(function() {
      obj.checkForAlarm(obj);
  }, 1000);

  this.setupEventHandlers();

  if (Backbone.history && !Backbone.History.started) {
    Backbone.history.start();
  }

};

// check for alarm
App.prototype.checkForAlarm = function(obj) {
    var timeArray = clock.getCurrentTime();
    var currentTime = timeArray[0] + '' + timeArray[1] + '' + timeArray[2];
    //console.log("time : " + currentTime);

    obj.checkAlarmForMedicine(currentTime);
};

App.prototype.checkAlarmForMedicine = function(currentTime) {
    //console.log("current time : " + currentTime + "med Time" + med.time+'00');

    for (var i = 0; i < AllMedication.length; i+=1) {
        var med = AllMedication[i];

        if(currentTime === med.time + '00') {
            //console.log("trigger");
            window.medicineForAlarm = med;
            window.App.navigate('medication');
        }
    }
};

//

var app = new App();

_.extend(app, Backbone.Events);

// FIXME this is a hack to resolve issue with the router design
window.App = app;

module.exports = app;
