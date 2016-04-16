'use strict';

var callFailedPage = require('../../src/js/pages/callFailedPage'),
  Router = require('../../src/js/framework/router.js'),
  App = require('../../src/js/app'),
  eventHub = require('../../src/js/framework/eventHub');

window.App = App;

describe('The Call Failed Page', function() {

  describe('rendering', function() {

    it('should produce the correct HTML', function() {
      callFailedPage.render();
      expect(callFailedPage.$el).toContainText('Call failed, retrying...');
    });

    it('returns the view object', function() {
      expect(callFailedPage.render()).toEqual(callFailedPage);
    });

    // it('should take me take me to the call Wait Page', function(){
    //   spyOn(window.App, 'navigate');
    //   expect(window.App.navigate).toHaveBeenCalledWith('callWait');
    // });

  });

});
