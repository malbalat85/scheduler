WorkerProfileSchema = new SimpleSchema({
  firstName: {
    label: "First name",
    type: String,
  },
  lastName: {
    label: "Last name",
    type: String,
  },
  email: {
    label: "Email",
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  password: {
    label: "Password",
    type: String,
    optional: true,
    autoform: {
      type: 'password',
    },
  },
  roles: {
    label: "Roles",
    type: [String],
    optional: true,
    autoform: {
      afFieldInput: {
        options: function () {
          return { admin: "Admin", worker: "Worker" };
        }
      }
    }
  },
});

WorkerSchema = new SimpleSchema({
	username: {
		type: String,
		regEx: /^[a-z0-9A-Z_]{3,15}$/,
    optional: true
	},
	emails: {
		type: [Object],
		optional: true
	},
	"emails.$.address": {
		type: String,
		regEx: SimpleSchema.RegEx.Email
	},
	"emails.$.verified": {
		type: Boolean
	},
	createdAt: {
		type: Date
	},
	profile: {
		type: WorkerProfileSchema,
		optional: true
	},
  verified: {
    type: Boolean,
    autoValue: function(){
      if(this.isInsert){
        return false;
      }
    },
  },
	services: {
		type: Object,
		optional: true,
		blackbox: true
	}
});

Meteor.users.attachSchema(WorkerSchema);


if (Meteor.isServer) {
  Meteor.users.allow({
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
