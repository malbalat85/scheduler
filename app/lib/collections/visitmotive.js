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
});

Visitmotive.attachSchema(VisitmotiveSchema);

if (Meteor.isServer) {
  Visitmotive.allow({
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
