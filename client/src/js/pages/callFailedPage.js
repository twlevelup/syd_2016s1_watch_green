'use strict';

var PageView = require('../framework/page');

var CallFailedView = PageView.extend({

  id: 'callFailed',

  template: require('../../templates/pages/callFailed.hbs'),

  /* function being triggered after 3s  the 'retrying' function is actioned
   simulating the time for getting back to the calling page
   */
  goToCallWait: function(){
    window.App.navigate('callWait');
    return this;
  },

  /*
  function being triggered by a touch on the watch face,
  ideally will be triggered as soon as the route 'callFailed' is called
  */
  render: function() {
    this.$el.html(this.template());
    //console.log('retrying is being called');
    setTimeout(this.goToCallWait, 3000);
    return this;
  }

});

module.exports = new CallFailedView();
