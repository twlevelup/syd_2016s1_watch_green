/* Tasks:
 * Need to be able to add/remove from the list/collection of medication without doing it manually
 */

'use strict';

var PageView = require('../framework/page');

var MedSummaryView = PageView.extend({

    id: 'medSummary',

    template: require('../../templates/pages/medSummary.hbs'),

    buttonEvents: {
        left: 'goToHomePage'
    },

    goToHomePage: function() {
        window.App.navigate('');
    },

    render: function() {
        this.$el.html(this.template());
        return this;
    },




});

module.exports = new MedSummaryView();
