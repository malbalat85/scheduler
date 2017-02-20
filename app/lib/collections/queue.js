import './visit.js';

Queue = new Mongo.Collection('queue');

QueueSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Identification name"
  },
  visits: {
    type: [String],
    optional: true,
  },
  closeHour: {
    type: Date,
    label: "Close hour",
  },
  openHour: {
    type: Date,
    label: "Open hour",
  },
  active: {
    type: Boolean,
    label: "Active"
  }
});

Queue.attachSchema(QueueSchema);

if (Meteor.isServer) {
  Queue.allow({
    insert: function (userId, doc) {
      return false;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function (userId, doc) {
      if (!isAdmin())
        return false;
      else 
        return true;
    }
  });

}
