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
            expect(medicationPage.$el).toContainElement('img.takenStatus'); //image element
        });

        it('returns the view object', function() {
            expect(medicationPage.render()).toEqual(medicationPage);
        });

    });

    describe('formatting time', function() {

        it('should return the correctly formatted time', function() {
            expect(medicationPage.getFormattedTime(900)).toEqual("9:00 AM");
            expect(medicationPage.getFormattedTime(1200)).toEqual("12:00 PM");
            expect(medicationPage.getFormattedTime(1500)).toEqual("3:00 PM");
            expect(medicationPage.getFormattedTime(1634)).toEqual("4:34 PM");
            expect(medicationPage.getFormattedTime(0)).toEqual("12:00 AM");
            expect(medicationPage.getFormattedTime(1334)).toEqual("1:34 PM");
        });

    });
});
