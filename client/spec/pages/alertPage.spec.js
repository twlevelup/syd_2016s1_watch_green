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
      // it('It should display "SNOOZED" to the user', function() {
      //     alertPage.render();
      //     eventHub.trigger('face');
      //     expect(alertPage.$el).toContainText('SNOOZED');
      // });
    // });

    describe('medication data', function() {

      it('should have a alerts collection', function() {
        expect(alertPage.alertsCollection).toBeDefined();
      });

      // describe('loading data', function() {
      //   it('should load the data from ...');
      // });

    });


    //Describe the button events
    describe('The Button Events', function() {

      beforeEach(function() {
        alertPage.render();
        alertPage.setButtonEvents();
      });

      describe('top', function() {
        xit('should scroll the watch face up', function() {
          spyOn(alertPage, 'scrollUpTop');
          // alertPage.render();
          // alertPage.setButtonEvents();
          window.App.vent.trigger('top');
          expect(alertPage.scrollUpTop).toHaveBeenCalled();
        });
      });

      describe('bottom', function() {
        xit('should scroll the watch face down', function() {
          spyOn(alertPage, 'scrollDownBot');
          // alertPage.setButtonEvents();
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
    });


    // Describe the rendering
    describe('rendering', function() {

      it('should produce the correct HTML', function() {
        it('should display the correct meds', function() {
          alertPage.render();
          expect(alertPage.$el).toContainText('Panadol');
        });

        it('should display the correct instructions', function() {
          alertPage.render();
          expect(alertPage.$el).toContainText('Panadol');
        });
      });

      it('returns the view object', function() {
        expect(alertPage.render()).toEqual(alertPage);
      });
    });
});
