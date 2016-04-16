'use strict';

var PageView = require('../framework/page');

var CancelCallView = PageView.extend({

    id: 'cancelCall',


    template: require('../../templates/pages/cancelCall.hbs'),

    render: function(){
      this.$el.html(this.template());
      setTimeout(this.goHome, 2000);
      return this;
    },

    goHome: function(){
      window.App.navigate('');
    }



});

module.exports = new CancelCallView();
