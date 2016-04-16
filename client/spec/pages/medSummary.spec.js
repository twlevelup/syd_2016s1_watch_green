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

        it('should take the user to the home page', function() {
          spyOn(window.App, 'navigate');
          eventHub.trigger('top');
          expect(medSummaryPage.render()).toEqual(medSummaryPage);
        });

        it('should show the meds summary', function() {
          spyOn(window.App, 'navigate');
          eventHub.trigger('bottom');
          expect(medSummaryPage.$el).toContainText('Panadol');
        });
    });
    describe('formatting time', function() {

        it('should return the correctly formatted time', function() {
            expect(medSummaryPage.getFormattedTime(900)).toEqual("9:00 AM");
            expect(medSummaryPage.getFormattedTime(1200)).toEqual("12:00 PM");
            expect(medSummaryPage.getFormattedTime(1500)).toEqual("3:00 PM");
            expect(medSummaryPage.getFormattedTime(1634)).toEqual("4:34 PM");
            expect(medSummaryPage.getFormattedTime(0)).toEqual("12:00 AM");
            expect(medSummaryPage.getFormattedTime(1334)).toEqual("1:34 PM");
            expect(medSummaryPage.getFormattedTime(1334)).toEqual("1:34 PM");

        });
        it('should return the correctly formatted time', function() {
            expect(medSummaryPage.getFormattedTime(900)).toEqual("9:00 AM");
            expect(medSummaryPage.getFormattedTime(1200)).toEqual("12:00 PM");
          });

          it('should return the correctly formatted time', function() {
              expect(medSummaryPage.getFormattedTime(1500)).toEqual("3:00 PM");
              expect(medSummaryPage.getFormattedTime(1634)).toEqual("4:34 PM");
            });


    });

  });
