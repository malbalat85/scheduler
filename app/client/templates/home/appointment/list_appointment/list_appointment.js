/*****************************************************************************/
/* ListAppointment: Event Handlers */
/*****************************************************************************/
Template.ListAppointments.events({
});

/*****************************************************************************/
/* ListAppointment: Helpers */
/*****************************************************************************/
Template.ListAppointments.helpers({
    queues: function() {
        return Queue.find();
    },
});

/*****************************************************************************/
/* ListAppointment: Lifecycle Hooks */
/*****************************************************************************/
Template.ListAppointments.onCreated(function () {
});

Template.ListAppointments.onRendered(function () {
});

Template.ListAppointments.onDestroyed(function () {
});

/*****************************************************************************/
/* QueueItem: Event Handlers */
/*****************************************************************************/
Template.ListAppointments.events({
    'click a': function (e, t) {
        Router.go('createVisitHome', {queue_id: this._id});
     }
});

/*****************************************************************************/
/* QueueItem: Helpers */
/*****************************************************************************/
Template.QueueItem.helpers({
    allowVisits: function (queue){  
        now = moment();
        queueObj = Queue.findOne({ _id: queue});
        //Need to do it this way, other wont work
        return queueObj.active && (queueObj.openHour.format("HH:mm") >= now.format("HH:mm") && (queueObj.closeHour.format("HH:mm") <= now.format("HH:mm")))
    },
    attendingVisits: function (visits){
        //To map the array
        attending = (visit) => {
            visitObj = Visit.findOne({_id: visit});
            if (visitObj)
                return visitObj._id ? !visitObj.endAttendedTime && visitObj.attendedBy : false;
            else
                return false;
        }

        return visits.filter(attending).length;
    },
});