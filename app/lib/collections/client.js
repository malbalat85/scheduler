import './address.js';
import './visit.js';

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
    unique: true,
  },
  phone: {
    type: String,
    regEx: SimpleSchema.RegEx.Phone,
    label: "Phone",
  },
  address: {
    label: "Address",
    type: AddressSchema,
  },
  visits: {
    label: "Visits",
    type: [String],
    blackbox: true,
    optional: true,
  },
  createdAt: {
    label: "Created at",
    type: Date,
    autoValue: function(){
      if(this.isInsert)
        return new Date();
    },
    //denyInsert: true,
    optional: true
  },
});

Client.attachSchema(ClientSchema);

if (Meteor.isServer) {
  Client.allow({
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

};
