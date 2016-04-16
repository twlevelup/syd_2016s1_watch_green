'use strict';

var callWaitPage = require('../../src/js/pages/callWaitPage'),
  Router = require('../../src/js/framework/router.js'),
  App = require('../../src/js/app'),
  eventHub = require('../../src/js/framework/eventHub');

window.App = App;

describe('The Call Buffering Page', function() {

  describe('rendering', function() {

    it('should produce the correct HTML', function() {
      callWaitPage.render();
      expect(callWaitPage.$el).toContainText('Calling...');
    });

    it('returns the view object', function() {
      expect(callWaitPage.render()).toEqual(callWaitPage);
    });

  });

  describe('button events', function() {

    beforeEach(function() {
      callWaitPage.setButtonEvents();
    });

    describe('left', function() {
      it('should take the user to the cancel call page', function() {
        spyOn(window.App, 'navigate');
        eventHub.trigger('left');
        expect(window.App.navigate).toHaveBeenCalledWith('cancelCall');
      });

      it('should cancel call ', function(){
          spyOn(callWaitPage, 'cancelCall');
          eventHub.trigger('left');
          expect(callWaitPage.cancelCall).toHaveBeenCalled();
      });

    });
  });

});
