


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
