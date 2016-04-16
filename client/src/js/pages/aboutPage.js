'use strict';

var BasePage = require('./basePage');

var AboutView = BasePage.extend({

  id: 'about',

  template: require('../../templates/pages/about.hbs'),

  buttonEvents      : {
    left    : 'goToHomePage',
    top     : 'scrollUp',
    bottom  : 'scrollDown',
  },


  goToHomePage: function() {
    window.App.navigate('');
  },

  scrollUp          : function() {
    $('#watch-face').animate({scrollTop: '-=70px'});
  },

  scrollDown        : function() {
    $('#watch-face').animate({scrollTop: '+=70px'});
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = new AboutView();
