/*****************************************************************************/
/* ListWorker: Event Handlers */
/*****************************************************************************/
Template.ListWorker.events({
  'click button[name="activate"]': function(event, template) {
    //Gets the userId to activate
    workerId = event.currentTarget.value;
    if(workerId){
      //Activate the cient to make login
      Meteor.call('activateUser', workerId, true);
    }
  },
});

/*****************************************************************************/
/* ListWorker: Helpers */
/*****************************************************************************/
Template.ListWorker.helpers({
  workerInfo: function(workerId){
    return Meteor.users.findOne({_id: workerId});
  },
  workers: function() {
    return Meteor.users.find();
  }
});

/*****************************************************************************/
/* ListWorker: Lifecycle Hooks */
/*****************************************************************************/
Template.ListWorker.onCreated(function () {
});

Template.ListWorker.onRendered(function () {
});

Template.ListWorker.onDestroyed(function () {
});

/****************************************/
Template.workerRow.helpers({
  //List the roles
  listRoles: function(roles){
    return roles.join(' ');
  },
});
