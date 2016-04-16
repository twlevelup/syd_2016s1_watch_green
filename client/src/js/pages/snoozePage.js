'use strict';

var PageView = require('../framework/page');

var SnoozeView = PageView.extend({

  id: 'snooze',

  template: require('../../templates/pages/snooze.hbs'),

  buttonEvents      : {
    left    : 'goToHomePage',
    top     : 'scrollUp',
    bottom  : 'scrollDown',
  },

  // initialize: function() {
  //   this.contactsCollection = new ContactsCollection();
  //   this.seedContacts();
  //   this.render();
  // },


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

module.exports = new SnoozeView();
