'use strict';

var PageView = require('../framework/page');
var eventHub = require('../framework/eventHub');



var BasePage = PageView.extend({

  count:0,

  id: 'base',

  //resetCount: undefined,

  setButtonEvents: function() {
    _.each(this.buttonEvents, function(eventHandler, buttonID) {
      this.listenTo(eventHub, buttonID, this[eventHandler]);
    }, this);
    this.listenTo(eventHub, 'face', this.threeClicks);
  },


  resetCount: function(){

    window.App.activePage.count = 0;
    //console.log('This is the count in the resetCount function '+ window.App.activePage.count);

  },

  threeClicks: function(){
    //console.log(this.count);

    clearTimeout(this.startResetCount);

    if(this.count === 2){
      this.goToCallWait();
      this.count = 0;
    }
    else{

    this.startResetCount = setTimeout(window.App.activePage.resetCount, 3000);
    this.count+=1;
    //console.log('Count in the 3 clicks '+ window.App.activePage.count);
    }

  },

  goToCallWait: function() {
    //console.log(this.count);
    window.App.navigate('callWait');
  }




});

module.exports = BasePage;
