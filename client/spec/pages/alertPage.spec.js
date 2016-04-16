'use strict';

var alertPage = require('../../src/js/pages/alertPage'),
  Router = require('../../src/js/framework/router'),
  App = require('../../src/js/app'),
  eventHub = require('../../src/js/framework/eventHub');

window.App = App;

describe('The Alert Page', function() {

    // Describe the right button
    // describe('right', function() {
    //   it('It should display a message thanking the user for taking their meds', function() {
    //     alertPage.render();
    //     eventHub.trigger('right');
    //     expect(alertPage.$el).toContainText('Thank you for taking your meds!');
    //     //spyOn(window.App, 'navigate');
    //     //homePage.setButtonEvents();
    //     //window.App.vent.trigger('right');
    //     //expect(window.App.navigate).toHaveBeenCalledWith('contacts');
    //   });
    // });

    // describe('face', function() {
    //   it('It should display "SNOOZED" to the user', function() {
    //       alertPage.render();
    //       eventHub.trigger('face');
    //       expect(alertPage.$el).toContainText('SNOOZE');
    //       expect()
    //   });
    // });

    //Describe the button events
    describe('The Button Events', function() {

      beforeEach(function() {
        alertPage.render();
        alertPage.setButtonEvents();
      });

      describe('top', function() {
        xit('should scroll the watch face up', function() {
          spyOn(alertPage, 'scrollUpTop');
          window.App.vent.trigger('top');
          expect(alertPage.scrollUpTop).toHaveBeenCalled();
        });
      });

      describe('bottom', function() {
        xit('should scroll the watch face down', function() {
          spyOn(alertPage, 'scrollDownBot');
          window.App.vent.trigger('bottom');
          expect(alertPage.scrollDownBot).toHaveBeenCalled();
        });
      });

      describe('left', function() {
        it('should take the user to the home page', function() {
          spyOn(window.App, 'navigate');
          eventHub.trigger('left');
          expect(window.App.navigate).toHaveBeenCalledWith('');
        });
      });

      describe('face', function() {
        it('should snooze the alarm', function() {
          spyOn(window.App, 'navigate');
          eventHub.trigger('face');
          expect(window.App.navigate).toHaveBeenCalledWith('snooze');
        });
      });

    });

    // Describe the rendering
    describe('rendering', function() {

      it('should produce the correct HTML', function() {
        it('should display the time', function() {
          alertPage.render();
          expect(alertPage.$el).toContainText('Time');
        });

        it('should display the instructions', function() {
          alertPage.render();
          expect(alertPage.$el).toContainText('Instructions');
        });
      });

      it('returns the view object', function() {
        expect(alertPage.render()).toEqual(alertPage);
      });
    });

    describe('formatting time', function() {

        it('should return the correctly formatted time', function() {
            expect(alertPage.getFormattedTime(900)).toEqual("9:00 AM");
            expect(alertPage.getFormattedTime(1200)).toEqual("12:00 PM");
            expect(alertPage.getFormattedTime(1500)).toEqual("3:00 PM");
            expect(alertPage.getFormattedTime(1634)).toEqual("4:34 PM");
            expect(alertPage.getFormattedTime(0)).toEqual("12:00 AM");
            expect(alertPage.getFormattedTime(1334)).toEqual("1:34 PM");
        });

    });

});
