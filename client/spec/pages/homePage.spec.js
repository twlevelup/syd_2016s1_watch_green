'use strict';

var homePage = require('../../src/js/pages/homePage'),
  Router = require('../../src/js/framework/router'),
  App = require('../../src/js/app');

window.App = App;

describe('The Home Page', function() {

  describe('button event handlers', function() {

    describe('right', function() {

      it('should take the user to the contacts page', function() {
        spyOn(window.App, 'navigate');
        homePage.setButtonEvents();
        window.App.vent.trigger('right');
        expect(window.App.navigate).toHaveBeenCalledWith('contacts');
      });
    });

    describe('left', function() {

      it('should take the user to the about page', function() {
        spyOn(window.App, 'navigate');
        homePage.setButtonEvents();
        window.App.vent.trigger('left');
        expect(window.App.navigate).toHaveBeenCalledWith('about');
      });
    });

    describe('top', function() {
      it('should take the user to the medication page', function() {
        // spyOn(homePage, 'scrollUp');
        // homePage.setButtonEvents();
        // window.App.vent.trigger('top');
        // expect(homePage.scrollUp).toHaveBeenCalled();
        spyOn(window.App, 'navigate');
        homePage.setButtonEvents();
        window.App.vent.trigger('top');
        expect(window.App.navigate).toHaveBeenCalledWith('medication');
      });
    });

    describe('bottom', function() {
      it('should scroll the watch face down', function() {
        spyOn(homePage, 'scrollDown');
        homePage.setButtonEvents();
        window.App.vent.trigger('bottom');
        expect(homePage.scrollDown).toHaveBeenCalled();
      });
    });

  });

  describe('rendering', function() {

    it('should produce the correct HTML', function() {
      homePage.render();
      expect(homePage.$el).toContainText('Hello, World!');
    });

    it('returns the view object', function() {
      expect(homePage.render()).toEqual(homePage);
    });

  });

});
