
Meteor.publish('address', function () {
  return Address.find();
});

Meteor.publish('visit', function () {
  return Visit.find();
});

Meteor.publish('visitmotive', function () {
  return Visitmotive.find();
});

Meteor.publish('client', function () {
  return Client.find();
});

Meteor.publish('queue', function () {
  return Queue.find();
});

// Publishing third party oauth service specifically to client
Meteor.publish('workerData', function() {
    var currentUser;
    currentUser = this.userId;
    if (currentUser) {
      currentRoles = Meteor.users.findOne({_id: currentUser}).profile.roles;
      if (inArray(currentRoles, "admin")){
        return Meteor.users.find({},{
          fields: {
            "profile": 1,
            "verified": 1,
          },
        });
      } else {
        return Meteor.users.find({
            _id: currentUser
        }, {
            fields: {
                "verified": 1,
                "profile": 1,
            }
        });
      }
    } else {
        return this.ready();
    }
});
