import './visit.js';

Queue = new Mongo.Collection('queue');

QueueSchema = new SimpleSchema({
  visits: {
    type: [VisitSchema],
    optional: true
  },
  closeHour: {
    type: Date,
    label: "Close hour",
  },
  openHour: {
    type: Date,
    label: "Open hour",
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
      return false;
    }
  });

}
