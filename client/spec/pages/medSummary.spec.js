'use strict';

var medSummaryPage = require('../../src/js/pages/medicationPage'),
    Router = require('../../src/js/framework/router.js'),
    //App = require('../../src/js/app'),
    eventHub = require('../../src/js/framework/eventHub');

//window.App = App;

describe('The Med summary Page', function() {

    describe('button events', function() {

      beforeEach(function() {
        medSummaryPage.setButtonEvents();
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


        it('should show the image of the capsule', function() {
            medSummaryPage.render();
            expect(medSummaryPage.$el).toContainElement('img.takenStatus'); //image element
        });

        it('returns the view object', function() {
            expect(medSummaryPage.render()).toEqual(medSummaryPage);
        });

    });

});
