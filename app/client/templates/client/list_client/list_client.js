/*****************************************************************************/
/* ListClient: Event Handlers */
/*****************************************************************************/
Template.ListClients.events({
  'click .clientRow': function(e,t){
    console.log(this._id);
    Router.go('listClientVisits', {_id: this._id});
   },
});

/*****************************************************************************/
/* ListClient: Helpers */
/*****************************************************************************/
Template.ListClients.helpers({
    clients: function(){
        return Client.find();
    },
    beforeRemove: function () {
      return function (collection, id) {
        var doc = collection.findOne(id);
        if (confirm('Do you want to delete this client: "' + doc.name + " " + doc.lastname + '"?')) {
          //this.remove();
          console.log(this);
        Router.go('listClients');
      }
    };
  }
});

/*****************************************************************************/
/* ListClient: Lifecycle Hooks */
/*****************************************************************************/
Template.ListClients.onCreated(function () {
});

Template.ListClients.onRendered(function () {
});

Template.ListClients.onDestroyed(function () {
});
