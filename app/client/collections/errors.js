// Local (client-only) collection
Errors = new Meteor.Collection(null);

clearErrors = function() {
  Errors.remove({seen: true});
};

throwError = function(message) {
  Errors.insert({message: message})
};
