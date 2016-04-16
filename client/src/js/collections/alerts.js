'use strict';

var Alert = require('../models/alert');

var Alerts = Backbone.Collection.extend({
  model: Alert
});

module.exports = Alerts;
