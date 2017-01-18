/*****************************************************************************/
/* CreateWorker: Event Handlers */
/*****************************************************************************/
Template.CreateWorker.events({
  'click #addWorker': function(e){
    e.preventDefault();
    var roles = [];
    $('input[name="roles"]:checked').each(function(){
      roles.push($(this).val());
    });

    var user = {
      password: $('#password').val(),
      email: $('#email').val(),
      profile: {
        roles: roles,
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        email: $('#email').val(),
      }
    };
    Accounts.createUser(user, function (error) {
      console.log(error);
      //Because this is the forbiden login at the created worker
      if(error && (error.error != 403)) {
        throwError(error.reason);
      }
      else {
        Router.go('listWorkers');
      }
    });
    return false;
  },
});

/*****************************************************************************/
/* CreateWorker: Helpers */
/*****************************************************************************/
Template.CreateWorker.helpers({
});

/*****************************************************************************/
/* CreateWorker: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateWorker.onCreated(function () {
});

Template.CreateWorker.onRendered(function () {

});

Template.CreateWorker.onDestroyed(function () {
});
