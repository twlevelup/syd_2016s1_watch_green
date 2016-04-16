'use strict';

var BasePage = require('./basePage');

var AlertsCollection = require('../collections/alerts'),
  AlertView = require('../views/alert');

var AlertsView = BasePage.extend({

  id                : 'alerts',

  template          : require('../../templates/pages/alert.hbs'),

  buttonEvents      : {
    left    : 'goToHomePage',
    // right   : 'playSound',
    top     : 'scrollUpTop',
    bottom  : 'scrollDownBot'
    // face    : 'snoozeAlert'
  },

  initialize: function() {
    this.alertsCollection = new AlertsCollection();
    this.seedAlerts();
    this.render();

  },


  seedAlerts: function() {
    this.alertsCollection.reset([
      { name: "Panadol", quantity: '2', time: '0800', instructions : 'after eating lunch or dinner with a glass of water', takenStatus: "not_taken"
      }
    ]);
  },

  snoozeAlert: function() {
      window.App.navigate('snooze');
      setTimeout(this.goToAlertPage, 5000);
  },

  acknowledgeAlert: function() {
    this.$el.html('<p>Thank you for taking your meds!</p>');
  },

  scrollUpTop: function() {
    $('#watch-face').animate({scrollTop: '-=400px'});
  },

  scrollDownBot: function() {
    $('#watch-face').animate({scrollTop: '+=400px'});
  },

  goToHomePage: function() {
  $('#watch-face').animate({scrollTop: '-400px'});
    window.App.navigate('');
  },

  playSound: function() {
    document.getElementById( 'timer-beep' ).play();
  },

  render: function() {

    this.$el.html(this.template());

    var alertsHTML = document.createDocumentFragment();

    this.alertsCollection.each(function(alert) {
      $(alertsHTML).append(this.createAlertHTML(alert));
    }, this);

    this.$el.find('ul').empty();
    this.$el.find('ul').html(alertsHTML);
    // this.playSound();
    return this;
  },

  createAlertHTML: function(alert) {
      var view = new AlertView({
        model: alert
      });
      return view.render().el;
    },

  goToAlertPage : function () {
      window.App.navigate('alert');
  }
});

module.exports = new AlertsView();
