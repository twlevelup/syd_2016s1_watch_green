'use strict';

var PageView = require('../framework/page');

var MedicationView = PageView.extend({

  id: 'medication',

  template: require('../../templates/pages/medication.hbs'),

  buttonEvents: {
    left: 'goToHomePage'
  },

  goToHomePage: function() {
    window.App.navigate('');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = new MedicationView();
