'use strict';

var aboutPage = require('../../src/js/pages/aboutPage'),
  Router = require('../../src/js/framework/router'),
  App = require('../../src/js/app');

window.App = App;

describe('The About Page', function() {

  describe('rendering', function() {

    it('should produce the correct HTML', function() {
      aboutPage.render();
      expect(aboutPage.$el).toContainHtml('Hello, World!');
    });

    it('returns the view object', function() {
      expect(aboutPage.render()).toEqual(aboutPage);
    });

  });

});
