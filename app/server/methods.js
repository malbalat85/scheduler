/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
  activateUser: function(userId) {
    if (isAdmin()){
      //This is really a pain but you can di this in Mongo
      userObj = Meteor.users.findOne({'_id': userId}, {fields: {'verified': true }});
      Meteor.users.update({
        '_id': userId
      }, {
        $set: {
          'verified': !userObj.verified
        }
      });
    }
  },
  updateWorkerProfile: function(workerId, profile){
    console.log(profile);
    if (isAdmin()){
      if(profile.password){
        Accounts.setPassword(workerId, profile.password);
        delete profile.password;
      }
      Meteor.users.update({'_id': workerId},{$set: {'profile': profile}});
    }
  },
});
