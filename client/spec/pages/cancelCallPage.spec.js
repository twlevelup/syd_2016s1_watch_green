'use strict';

var cancelCallPage = require('../../src/js/pages/cancelCallPage'),
Router = require('../../src/js/framework/router.js'),
App = require('../../src/js/app'),
eventHub = require('../../src/js/framework/eventHub');

window.App = App;

describe('The Canceled call page', function() {
  describe('render', function () {
    it('should render the page', function() {
      cancelCallPage.render();
      expect(cancelCallPage.$el).toContainText('Cancelled');
    });

    it('should go to home page after 2 seconds', function(done){
      spyOn(window.App, 'navigate');
      // spyOn(window, 'setTimeout').and.return(true);
      // waitsFor(2000);
      setTimeout(function(){
        expect(window.App.navigate).toHaveBeenCalledWith('');
        done();
      }, 2000);
    });
  });
});
