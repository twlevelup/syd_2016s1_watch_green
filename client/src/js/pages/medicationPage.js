'use strict';

var PageView = require('../framework/page');

// Should put medication definition in another file, so other pages can also use it

// Need better name for this
// Time specified in 24 hour time as an integer
function MedicationInstance(time, instructions){
    this.time = time;
    this.instructions = instructions;
}

function Medication(name, times){
    this.name = name;
    this.times = times;
}

var Med1 = new Medication("Acetyl-Cholinesterase inhibitor",
                          [new MedicationInstance(09, "with food"),
                          new MedicationInstance(18, "with food")]
                         );

var Med2 = new Medication("Beta Amyloid Immunoglobulin",
                          [new MedicationInstance(12, "take two")]);

var Med3 = new Medication("Tau Immunoglobulin",
                          [new MedicationInstance(18, "with food")]);

var Med4 = new Medication("Formeterolol",
                          [new MedicationInstance(15, "with water")]);

// var Testing = [
// {
//   name : "Name of medication",
//   time : "09:00"
// }
// ];

var AllMedication = [Med1, Med2, Med3, Med4];

// var MedicationCollection = Backbone.Collection.extend({model:Medication});
// var AllMedication = new MedicationCollection();
// AllMedication.add(Med1);
// AllMedication.add(Med2);
// AllMedication.add(Med3);
// AllMedication.add(Med4);

var MedicationView = PageView.extend({

  id: 'medication',

  template: require('../../templates/pages/medication.hbs'),
  // template : _.template(require('../../templates/pages/medication.hbs')),

  buttonEvents: {
    left: 'goToHomePage'
  },

  goToHomePage: function() {
    window.App.navigate('');
  },

  render: function() {
    //  var compiled = _.template(this.template);
    // this.$el.html(this.template(AllMedication));

    this.$el.html(this.template({medication: AllMedication}));
    return this;
  }

});

module.exports = new MedicationView();
