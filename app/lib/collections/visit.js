import './visitmotive.js';

Visit = new Mongo.Collection('visit');

VisitSchema = new SimpleSchema({
  createdAt: {
      type: Date,
      autoValue: function() {
          if (this.isInsert) {
              return new Date();
          } else if (this.isUpsert) {
              return {$setOnInsert: new Date()};
          } else {
              this.unset();
          }
      },
      denyUpdate: true
  },
  attendedAt: {
    type: Date,
    label: "Attended at",
    optional: true
  },
  motive: {
    type: [VisitmotiveSchema],
    label: "Reason/Motives"
  },
  attendedBy: {
    type: Object,
    label: "Attended By",
    optional: true
  },
    explanation: {
    label: "Explain your motives",
    type: String,
    optional: true,
    autoform: {
			type: "hidden"
		},
    custom: function () {
      var shouldBeRequired = this.field('motive.$.canexplain').value == 1;

      if (shouldBeRequired) {
        // inserts
        if (!this.operator) {
          if (!this.isSet || this.value === null || this.value === "") return "required";
        }
        // updates
        else if (this.isSet) {
          if (this.operator === "$set" && this.value === null || this.value === "") return "required";
          if (this.operator === "$unset") return "required";
          if (this.operator === "$rename") return "required";
        }
      }
    },
  },
});

Visit.attachSchema(VisitSchema);

if (Meteor.isServer) {
  Visit.allow({
    insert: function (userId, doc) {
      return false;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function (userId, doc) {
      return false;
    }
  });

  Visit.deny({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });
}
