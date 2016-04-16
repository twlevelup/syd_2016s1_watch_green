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

        // it('should produce the correct HTML', function() {
        //     medSummaryPage.render();
        //     expect(medSummaryPage.$el).toContainText('Here are your meds for today.'); //image element
        // });

        it('returns the view object', function() {
            expect(medSummaryPage.render()).toEqual(medSummaryPage);
        });

    });

});
