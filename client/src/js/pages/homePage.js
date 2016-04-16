'use strict';

var BasePage = require('./basePage');

var HomeScreen = BasePage.extend({

  id: 'home',

  //HomeScreen.inherits(BasePage);

  template: require('../../templates/pages/home.hbs'),

  buttonEvents: {
    left: 'goToAbout',
    right: 'goToContacts',
    top: 'goToMedication',
    bottom: 'scrollDown'
  },

  goToAbout: function() {
    window.App.navigate('about');
  },

  goToContacts: function() {
    window.App.navigate('contacts');
  },


  goToMedication: function() {
    window.App.navigate('medication');
  },

  scrollDown: function() {
    $('#watch-face').animate({scrollTop: '+=70px'});
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = new HomeScreen();
