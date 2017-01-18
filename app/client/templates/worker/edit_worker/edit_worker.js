/*****************************************************************************/
/* EditWorker: Event Handlers */
/*****************************************************************************/
Template.EditWorker.events({
  'click #updateWorkerBtn': function(event) {
    var firstName = $('input[name="profile.firstName"]').val();
    var lastName = $('input[name="profile.lastName"]').val();
    var password = $('input[name="profile.password"]').val();
    roles = $('input[type="checkbox"]:checked');
    var roles_array = [];
    _.each(roles, function(key, value){
      roles_array.push(key.value);
    });

    var profile = {
      //Dirty way to do this
      'email': this.profile.email,
      'firstName': firstName,
      'lastName': lastName,
      'roles': roles_array
    };
    if (password.length > 0)
      profile['password'] = password;

    console.log(profile);
    Meteor.call('updateWorkerProfile', this._id, profile, function(error) {
      if(error)
        throwError(error.message);
      else
          Router.go('listWorkers');
    });

  },
});

/*****************************************************************************/
/* EditWorker: Helpers */
/*****************************************************************************/
Template.EditWorker.helpers({
});

/*****************************************************************************/
/* EditWorker: Lifecycle Hooks */
/*****************************************************************************/
Template.EditWorker.onCreated(function () {
});

Template.EditWorker.onRendered(function () {
});

Template.EditWorker.onDestroyed(function () {
});
