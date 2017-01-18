/*****************************************************************************/
/* ListVisits: Event Handlers */
/*****************************************************************************/
Template.ListVisits.events({
});

/*****************************************************************************/
/* ListVisits: Helpers */
/*****************************************************************************/
Template.ListVisits.helpers({
  client: function(){
    return Client.findOne({_id: this.params._id});
  },
});

/*****************************************************************************/
/* ListVisits: Lifecycle Hooks */
/*****************************************************************************/
Template.ListVisits.onCreated(function () {
});

Template.ListVisits.onRendered(function () {
});

Template.ListVisits.onDestroyed(function () {
});
