'use strict';

var medicationPage = require('../../src/js/pages/medicationPage'),
    Router = require('../../src/js/framework/router.js'),
    //App = require('../../src/js/app'),
    eventHub = require('../../src/js/framework/eventHub');

//window.App = App;

describe('The Medication Page', function() {

    describe('button events', function() {

      beforeEach(function() {
        medicationPage.setButtonEvents();
      });

      describe('left', function() {
        it('should take the user to the home page', function() {
          spyOn(window.App, 'navigate');
          eventHub.trigger('left');
          expect(window.App.navigate).toHaveBeenCalledWith('');
        });
      });
    });


    describe('rendering', function() {

        it('should produce the correct HTML', function() {
            medicationPage.render();
            expect(medicationPage.$el).toContainText('Medication');
        });

        it('returns the view object', function() {
            expect(medicationPage.render()).toEqual(medicationPage);
        });

    });

});
