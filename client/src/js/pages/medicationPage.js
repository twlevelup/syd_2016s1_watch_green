/* Tasks:
 * Need to be able to add/remove from the list/collection of medication without doing it manually
 */

'use strict';

var BasePage = require('./basePage');

var taken = "../../images/pill_taken.png";
var not_taken = "../../images/pill_not_taken.png";

var AllMedication = [
    { name: "Panadol", quantity: "1", time: "0900", instructions: "", takenStatus: taken },
    { name: "Donepezil", quantity: "2", time: "1200", instructions: "", takenStatus: taken },
    { name: "Formetorolol", quantity: "4", time: "1330", instructions: "", takenStatus: not_taken },
    { name: "Prozac", quantity: "25ml", time: "1500", instructions: "", takenStatus: taken },
    { name: "Ventolin", quantity: "3", time: "1800", instructions: "", takenStatus: not_taken }
];

var med = AllMedication[0];

var index = 0;

var MedicationView = BasePage.extend({

    id: 'medication',

    template: require('../../templates/pages/medication.hbs'),

    buttonEvents: {
        left: 'goToHomePage',
        bottom: 'goToBottomPage',
        top: 'goToTopPage',
    },

    goToHomePage: function() {
        window.App.navigate('');
    },

    goToTopPage: function() {
        index -= 1;
        if (index < 0) {
            index = AllMedication.length - 1;
        }

        med = AllMedication[index];
        this.render();
        return this;
    },

    goToBottomPage: function() {
        index += 1;
        if (index > AllMedication.length - 1) {
            index = 0;
        }

        med = AllMedication[index];
        this.render();
        return this;
    },

    render: function() {
        med.formattedTime = this.getFormattedTime(med.time);
        this.$el.html(this.template(med));
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
    },

    showNextMedicine : function(index) {

    }
});

module.exports = new MedicationView();
