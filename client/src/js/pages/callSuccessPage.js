'use strict';

var PageView = require('../framework/page');

var CallSuccessView = PageView.extend({

  id: 'callSuccess',

  template: require('../../templates/pages/callSuccess.hbs'),

  buttonEvents: {
    left: 'goHome',
    right: 'goHome',
    top: 'goHome',
    bottom: 'goHome',
    face: 'goHome'
  },

  goHome: function(){
    window.App.navigate('');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }


});

module.exports = new CallSuccessView();
