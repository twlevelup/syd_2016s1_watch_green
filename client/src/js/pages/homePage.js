'use strict';

var BasePage = require('./basePage');

var HomeScreen = BasePage.extend({

  id: 'home',

  //HomeScreen.inherits(BasePage);

  template: require('../../templates/pages/home.hbs'),

  buttonEvents: {
    left: 'goToAbout',
    right: 'goToContacts',
    top: 'scrollUp',
    bottom: 'scrollDown',
    //face: 'goToCallWait',

  },

  goToAbout: function() {
    window.App.navigate('about');
  },

  goToContacts: function() {
    window.App.navigate('contacts');
  },

  // goToCallWait: function() {
  //   //console.log('the function is arriving here');
  //   window.App.navigate('callWait');
  // },

  scrollUp: function() {
    $('#watch-face').animate({scrollTop: '-=70px'});
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
