'use strict';

var PageView = require('../framework/page');

var HomeScreen = PageView.extend({

  id: 'home',

  template: require('../../templates/pages/home.hbs'),

  buttonEvents: {
    left: 'goToAbout',
    right: 'goToContacts',
    top: 'scrollUp',
    bottom: 'scrollDown',
    left: 'goToAbout'
  },

  goToAbout: function() {
    window.App.navigate('about');
  },

  goToContacts: function() {
    window.App.navigate('contacts');
  },

  goToAbout: function() {
    window.App.navigate('about');
  },

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
