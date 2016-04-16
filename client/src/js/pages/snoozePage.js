'use strict';

var PageView = require('../framework/page');

var SnoozeView = PageView.extend({

  id: 'snooze',

  template: require('../../templates/pages/snooze.hbs'),


  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = new SnoozeView();
