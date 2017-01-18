Accounts.onCreateUser(function(options, user) {
  //Handle the first user created: must be admin
  console.log(user);
  console.log(options);
  console.log(Meteor.users.find().fetch());

  // Use provided profile in options, or create an empty profile object
  let profile = options.profile || {};

  if (options.profile){
    // Assigns the first and last names to the newly created user object
    user.profile = options.profile;
  }
  if (options.profile.roles.length == 0){
    //Basic Role Set Up
    user.profile.roles = ['worker'];
  }

  // Returns the user object
  return user;
});

Accounts.validateLoginAttempt(function(attemptInfo) {
  if (!attemptInfo.user) {
    return false;
  }
  if (attemptInfo.user.verified) {
    return true;
  } else {
    //Meteor.call('updateUserFirstLogin', attemptInfo.user._id);
    return false;
  }
});
