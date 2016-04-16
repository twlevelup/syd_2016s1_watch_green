'use strict';

var AlertView = Backbone.View.extend({

  tagName: 'li',

  template: require('../../templates/views/alert.hbs'),

  initialize: function() {
    _.bindAll(this, 'render');
    // this.model.on('change', this.render);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }

  // remove: function() {
  //   this.model.off('change', this.render);
  //   this.$el.remove();
  // }

});

module.exports = AlertView;
