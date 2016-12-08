Client = new Mongo.Collection('client');

ClientSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    max: 100,
  },
  midname: {
    type: String,
    label: "Mid name",
    max: 5,
    optional: true,
  },
  lastname: {
    type: String,
    label: "Last Name",
    max: 100,
  },
  email: {
    type: String,
    label: "Email",
    regEx: SimpleSchema.RegEx.Email,
  },
  address: {
    label: "Address",
    type: AddressSchema,
  },
  visits: {
    label: "Visits",
    type: VisitSchema,
    optional: true,
  },
  phone: {
    type: String,
    regEx: SimpleSchema.RegEx.Phone,
  }
});

Client.attachSchema(ClientSchema);

if (Meteor.isServer) {
  Client.allow({
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

  Client.deny({
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
