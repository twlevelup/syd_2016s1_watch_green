/* Tasks:
 * Need to be able to add/remove from the list/collection of medication without doing it manually
 */

'use strict';

var BasePage = require('./basePage');


var AllMedication = [
    { name: "Panadol", quantity: "1", time: "0900"},
    { name: "Donepezil", quantity: "2", time: "1200"},
    { name: "Formetorolol", quantity: "4", time: "1330"},
    { name: "Prozac", quantity: "25ml", time: "1500"},
    { name: "Ventolin", quantity: "3", time: "1800"}
];

var med = AllMedication[0];
var index = -1;

var MedSummaryView = BasePage.extend({

    id: 'medSummary',

    template: require('../../templates/pages/medSummary.hbs'),
    templateView: require('../../templates/pages/medSummaryView.hbs'),

    buttonEvents: {
        left: 'goToHomePage',
        top: 'goToTopPage',
        bottom: 'goToBottomPage'
    },

    goToHomePage: function() {
        if (index !== AllMedication.length - 1) {
            return;
        }

        window.App.navigate('');
    },

    render: function() {
        this.$el.html(this.template());
        return this;
    },

    renderView: function() {
        med.formattedTime = this.getFormattedTime(med.time);
        this.$el.html(this.templateView(med));
        return this;
    },

    goToTopPage: function() {
        if (index === -1) {
          return;
        }
        index -= 1;
        if (index < 0) {
            index = AllMedication.length - 1;
        }

        med = AllMedication[index];
        this.renderView();
        return this;
    },

    goToBottomPage: function() {
        index += 1;
        if (index > AllMedication.length - 1) {
            index = 0;
        }

        med = AllMedication[index];
        this.renderView();
        return this;
    },

    getFormattedTime: function(time) {
        var r = time % 100;
        var quantity = time - r;
        if(r < 10) {
            r = "0" + r;
        }

        var q = quantity / 100;
        if(quantity >= 1300) {
            q = (quantity - 1200) / 100;
        }

        var postscript = " AM";
        if(time >= 1200 && time <= 2359) {
            postscript = " PM";
        }

        if(q === 0) {
            q = 12;
            postscript = " AM";
        }

        return q + ":" + r + postscript;
    }

});

module.exports = new MedSummaryView();
