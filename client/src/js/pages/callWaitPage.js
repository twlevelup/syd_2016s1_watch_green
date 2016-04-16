'use strict';

var PageView = require('../framework/page');

var CallWaitView = PageView.extend({

  id: 'callWait',

  template: require('../../templates/pages/callWait.hbs'),

  buttonEvents:{
    face: 'wait',
    left: 'goToCancelCall'
  },

  cancelCallTimeOut: undefined,

  /* function being triggered after 5s  the 'wait' function is actioned
     simulating the time for calling emergency
   */
  calling: function () {
    //console.log('calling is being called');

    var callSuccessful = function(){
      window.App.navigate('callSuccess');
    };
    var callFail = function(){
      window.App.navigate('callFailed');
    };

    // get a random Number to simulate Calling to the ambulance
    var randomNum = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    //console.log(randomNum);

    // condition to call the page according to the random number
    if(randomNum > 5){
      callSuccessful();
    }else{
      callFail();
    }

    return this;
  },

  goToCancelCall: function(){
    window.App.navigate('cancelCall');
    this.cancelCall();
  },

  cancelCall: function(){
    window.clearTimeout(this.cancelCallTimeOut);
  },

  /* function being triggered by a touch on the watch face,
     ideally will be triggered as soon as the route 'callWait' is called
    */
  render: function() {
    this.$el.html(this.template());
    this.cancelCallTimeOut = setTimeout(this.calling, 3000);
    return this;
  },




});

module.exports = new CallWaitView();
