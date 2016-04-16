'use strict';

var BasePage = require('../../src/js/pages/basePage'),
  Router = require('../../src/js/framework/router'),
  App = require('../../src/js/app'),
  eventHub = require('../../src/js/framework/eventHub')
  ;

window.App = App;

describe('Watch Face click', function() {
  var basePage = new BasePage();
  describe('button wattch face handler', function() {

    describe('face', function() {

      beforeEach(function() {
        basePage.setButtonEvents();
      });

      it('should reset the count to zero after 10 seconds', function(done){
        basePage.trigger('face');
        basePage.trigger('face');
        setTimeout(function(){
          expect(basePage.count).toEqual(0);
          done();
        }, 3100);
        });

    });


  });
});
