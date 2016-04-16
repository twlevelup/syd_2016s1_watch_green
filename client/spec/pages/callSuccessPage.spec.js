'use strict';

var callSuccessPage = require('../../src/js/pages/callSuccessPage'),
  Router = require('../../src/js/framework/router.js'),
  App = require('../../src/js/app'),
  eventHub = require('../../src/js/framework/eventHub');

window.App = App;

describe('The Call Success Page', function() {

  describe('rendering', function() {

    it('should produce the correct HTML', function() {
      callSuccessPage.render();
      expect(callSuccessPage.$el).toContainText('Call Successful');
    });

    beforeEach(function() {
      callSuccessPage.setButtonEvents();
    });

    it('should take me back home', function(){
      spyOn(window.App, 'navigate');
      eventHub.trigger('right');
      expect(window.App.navigate).toHaveBeenCalledWith('');
    });

    it('should take me back home', function(){
      spyOn(window.App, 'navigate');
      eventHub.trigger('left');
      expect(window.App.navigate).toHaveBeenCalledWith('');
    });

    it('should take me back home', function(){
      spyOn(window.App, 'navigate');
      eventHub.trigger('top');
      expect(window.App.navigate).toHaveBeenCalledWith('');
    });

    it('should take me back home', function(){
      spyOn(window.App, 'navigate');
      eventHub.trigger('bottom');
      expect(window.App.navigate).toHaveBeenCalledWith('');
    });

    it('should take me back home', function(){
      spyOn(window.App, 'navigate');
      eventHub.trigger('face');
      expect(window.App.navigate).toHaveBeenCalledWith('');
    });

    it('returns the view object', function() {
      expect(callSuccessPage.render()).toEqual(callSuccessPage);
    });

  });

});
