'use strict';

var BasePage = require('./basePage');

var taken = "../../images/pill_taken.png";
var not_taken = "../../images/pill_not_taken.png";

var AllMedication = [
    { name: "Panadol", quantity: "1", time: "0900", instructions: "Take with glass of water", takenStatus: taken},
    { name: "Donepezil", quantity: "2", time: "1200", instructions: "Have with food", takenStatus: taken},
    { name: "Formetorolol", quantity: "4", time: "1330", instructions: "Inject into arm", takenStatus: not_taken},
    { name: "Prozac", quantity: "25ml", time: "1500", instructions: "Dissolve into water", takenStatus: taken},
    { name: "Ventolin", quantity: "3", time: "1800", instructions: "Dissolve into water", takenStatus: not_taken}
];

// var med = window.currentMed;

var med = window.currentMed;
if(med === undefined) {
    med = AllMedication[0];
}

var AlertsView = BasePage.extend({

  id                : 'alert',

  template          : require('../../templates/pages/alert.hbs'),

  buttonEvents      : {
    left    : 'goToHomePage',
    right   : 'snoozeAlert',
    top     : 'scrollUpTop',
    bottom  : 'scrollDownBot'
    // face    : 'snoozeAlert'
  },

  initialize: function() {
    this.render();
  },

  snoozeAlert: function() {
      window.App.navigate('snooze');
      setTimeout(this.goToAlertPage, 3000);
  },

  // acknowledgeAlert: function() {
  //   this.$el.html('<p>Thank you for taking your meds!</p>');
  // },

  scrollUpTop: function() {
    $('#watch-face').animate({scrollTop: '-=400px'});
  },

  scrollDownBot: function() {
    $('#watch-face').animate({scrollTop: '+=400px'});
  },

  goToHomePage: function() {
    window.App.navigate('');
  },

  // playSound: function() {
  //   document.getElementById( 'timer-beep' ).play();
  // },

  render: function() {
      med.formattedTime = this.getFormattedTime(med.time);
      this.$el.html(this.template(med));
      return this;
  },

  getFormattedTime: function(time) {
      var r = time % 100;
      var quantity = time - r;
      if(r < 10) {
          r = "0" + r;
      }

      var q = quantity / 100;
      if(quantity >= 1300) {
          q = (quantity - 1200) / 100;
      }

      var postscript = " AM";
      if(time >= 1200 && time <= 2359) {
          postscript = " PM";
      }

      if(q === 0) {
          q = 12;
          postscript = " AM";
      }

      return q + ":" + r + postscript;
  },

  goToAlertPage : function () {
      window.App.navigate('alert');
  }

});

module.exports = new AlertsView();
