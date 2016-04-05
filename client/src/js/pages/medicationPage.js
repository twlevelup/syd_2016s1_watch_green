/* Tasks:
 * Need to be able to add/remove from the list/collection of medication without doing it manually
 */

'use strict';

var PageView = require('../framework/page');

var taken = "../../images/pill_taken.png";
var not_taken = "../.../images/pill_not_taken.png";

var AllMedication = [
    { name: "Panadol", quantity: "1", time: "09:00", status: taken },
    { name: "Donepezil", quantity: "2", time: "12:00", status: "not taken" },
    { name: "Formetorolol", quantity: "4", time: "13:30", status: "not taken" },
    { name: "Prozac", quantity: "25ml", time: "15:00", status: "not taken" },
    { name: "Ventolin", quantity: "3", time: "18:00", status: "not taken" }
];

/* Alternate method of defining medication*/
/*
function Medication(name, time){
    this.name = name;
    this.time = time;
}

var Med1 = new Medication("Acetyl-Cholinesterase inhibitor", "09:00");
var Med2 = new Medication("Beta Amyloid Immunoglobulin", "12:00");
var Med3 = new Medication("Tau Immunoglobulin", "15:00");
var Med4 = new Medication("Acetyl-Cholinesterase inhibitor", "18:00");

var AllMedication = [Med1, Med2, Med3, Med4];
*/

var index = 0;

var MedicationView = PageView.extend({

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
        this.$el.html(this.template(AllMedication[index]));
        return this;
    },

    goToBottomPage: function() {
        index += 1;
        if (index > AllMedication.length - 1) {
            index = 0;
        }
        this.$el.html(this.template(AllMedication[index]));
        return this;
    },

    render: function() {
        this.$el.html(this.template(AllMedication[index]));
        return this;
    }

});

module.exports = new MedicationView();
