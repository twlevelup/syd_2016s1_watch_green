'use strict';

var PageView = require('../framework/page');

var AlertsCollection = require('../collections/alerts'),
  AlertView = require('../views/alert');
// InstructionsView = require('../views/instructions');


var AlertsView = PageView.extend({

  id                : 'alerts',

  template          : require('../../templates/pages/alert.hbs'),


  buttonEvents      : {
    left    : 'goToHomePage',
    // right   : 'playSound',
    top     : 'scrollUp',
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
      { medTitle: "Panadol", quantity: '2', timeTakeMeds: '8:00 AM', medInstructions : 'after eating lunch or dinner with a glass of water'
      }

    ]);
  },

  snoozeAlert       : function() {
    // this.$el.html('<p>SNOOZED</p>');
      window.App.navigate('snooze');
      setTimeout(this.reRender, 5000);
  },

  acknowledgeAlert  : function() {
    this.$el.html('<p>Thank you for taking your meds!</p>')
  },


  scrollUp          : function() {
    $('#watch-face').animate({scrollTop: '-=400px'});
  },

  scrollDownBot        : function() {
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

    this.$el.find('ul').empty()
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

  //   reRender : function () {
  //    this.$el.html(this.template());
  //    return this;
  //  },

    reRender : function () {
      window.App.navigate('alert');
    }


});

module.exports = new AlertsView();
