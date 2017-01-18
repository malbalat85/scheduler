Address = new Mongo.Collection('address');

AddressSchema = new SimpleSchema({
  number: {
    type: Number,
    label: "Apt/House Number",
  },
  street: {
    type: String,
    label: "Street name",
  },
  city: {
    type: String,
    label: "City",
  },
  state: {
    type: String,
    regEx: /^A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]$/,
  },
  zipcode: {
    type: String,
    label: "Zip code",
    regEx: /^\d{5}(?:[-\s]\d{4})?$/,
  },
});

Address.attachSchema(AddressSchema);

if (Meteor.isServer) {
  Address.allow({
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
