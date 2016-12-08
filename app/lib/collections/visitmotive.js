Visitmotive = new Mongo.Collection('visitmotive');

VisitmotiveSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name",
  },
  canexplain: {
    type: Boolean,
    label: "Can explain?",
  },
  explanation: {
    label: "Explain your motives",
    type: String,
    optional: true,
    custom: function () {
      var shouldBeRequired = this.field('canexplain').value == 1;

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

Visitmotive.attachSchema(VisitmotiveSchema);

if (Meteor.isServer) {
  Visitmotive.allow({
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

  Visitmotive.deny({
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
