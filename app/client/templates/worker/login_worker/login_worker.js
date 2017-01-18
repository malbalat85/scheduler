/*****************************************************************************/
/* LoginWorker: Event Handlers */
/*****************************************************************************/
Template.LoginWorker.events({
  'click #login': function() {
    var username = $('#login-username').val();
    var password = $('#login-password').val();

    Meteor.loginWithPassword(username, password, function(error) {
      if(error){
        alert(error);
      } else {
        Router.go('');
      }
    });
  }
});

/*****************************************************************************/
/* LoginWorker: Helpers */
/*****************************************************************************/
Template.LoginWorker.helpers({
  default_image: function(){
    return Meteor.absoluteUrl() + "img/default/app-logo.png";
  }
});

/*****************************************************************************/
/* LoginWorker: Lifecycle Hooks */
/*****************************************************************************/
Template.LoginWorker.onCreated(function () {
});

Template.LoginWorker.onRendered(function () {
});

Template.LoginWorker.onDestroyed(function () {
});
