/*****************************************************************************/
/* QueueClients: Event Handlers */
/*****************************************************************************/
Template.QueueClients.events({
});

/*****************************************************************************/
/* QueueClients: Helpers */
/*****************************************************************************/
Template.QueueClients.helpers({
  queueClients: function(){
    //Need today and tomorrow to ser by
    var today = new Date().setHours(0,0,0,0);
    var tomorrow = moment(today).add(1, 'days').toDate();
    return Client.find({
      'visits.createdAt': {$gte: today, $lt: tomorrow},
      'sort': {'visits.createdAt': -1}
    }, {
      'fields': {
        'firstName': true,
        'lastName': true,
        'profile.email': true,
        'visits': true,
      },
    });
  },
  //Need to make this better, because its the same query
  clientsAttended: function(){
    var today = new Date().setHours(0,0,0,0);
    var tomorrow = moment(today).add(1, 'days').toDate();
    return Client.find({
      'visits.createdAt': {$gte: today, $lt: tomorrow},
    }, {
      'fields': {
        'firstName': true,
        'lastName': true,
        'profile.email': true,
        'visits': true,
      }
    });
  },
});

/*****************************************************************************/
/* QueueClients: Lifecycle Hooks */
/*****************************************************************************/
Template.QueueClients.onCreated(function () {
});

Template.QueueClients.onRendered(function () {
});

Template.QueueClients.onDestroyed(function () {
});
