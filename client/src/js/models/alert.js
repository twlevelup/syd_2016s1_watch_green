'use strict';

var Alert = Backbone.Model.extend({
  defaults: {
    medTitle: "Panadol x 2",
    timeTakeMeds: '8:00 AM',
    imageIcon: '../../images/clock.png',
    medInstructions : 'Take after eating lunch or dinner with a glass of water',
    medIcon: '../../images/pills.png'
  }
});

module.exports = Alert;
