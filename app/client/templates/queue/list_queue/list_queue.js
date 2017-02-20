/*****************************************************************************/
/* ListQueue: Event Handlers */
/*****************************************************************************/
Template.ListQueue.events({
    'click button[name="activate"]': function (event, template) {
        //Gets the userId to activate
        queueId = event.currentTarget.value;
        if (queueId) {
            //Activate the cient to make login
            Meteor.call('activateQueue', queueId, function(error, result){
                if(error){
                    Bert.alert('Error: ' + error.message, 'danger');
                }
            });
        }
    },
    'click .queueRow': function(e,t){
        Router.go('listQueueVisits', {_id: this._id});
    },
});

/*****************************************************************************/
/* ListQueue: Helpers */
/*****************************************************************************/
Template.ListQueue.helpers({
    queues: function () {
        if (Meteor.userId()) {
            return Queue.find({});
        }
    },
});

/*****************************************************************************/
/* ListQueue: Lifecycle Hooks */
/*****************************************************************************/
Template.ListQueue.onCreated(function () {
});

Template.ListQueue.onRendered(function () {
});

Template.ListQueue.onDestroyed(function () {
});

/*****************************************************************************/
/* queueRow: Helpers */
/*****************************************************************************/
Template.queueRow.helpers({
    visitsCount: function (list) {
        if (list)
            return list.length || 0;
        else
            return 0;
    }
});