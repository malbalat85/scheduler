/*****************************************************************************/
/* ListVisitmotive: Event Handlers */
/*****************************************************************************/
Template.ListVisitMotive.events({
});

/*****************************************************************************/
/* ListVisitmotive: Helpers */
/*****************************************************************************/
Template.ListVisitMotive.helpers({
  visitmotives: function(){
      return Visitmotive.find();
  }
});

/*****************************************************************************/
/* ListVisitmotive: Lifecycle Hooks */
/*****************************************************************************/
Template.ListVisitMotive.onCreated(function () {
});

Template.ListVisitMotive.onRendered(function () {
});

Template.ListVisitMotive.onDestroyed(function () {
});
