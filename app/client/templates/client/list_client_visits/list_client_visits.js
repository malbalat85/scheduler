/*****************************************************************************/
/* ListClientVisits: Event Handlers */
/*****************************************************************************/
Template.ListClientVisits.events({
});

/*****************************************************************************/
/* ListClientVisits: Helpers */
/*****************************************************************************/
Template.ListClientVisits.helpers({
    visitsObj: function () {
        return Visit.find({ _id: { $in: this.visits } }, {
            transform: function (doc) {
                doc.motive = Visitmotive.find({ _id: { $in: doc.motive } }).fetch();
                if (doc.attendedBy) {
                    doc.attendedBy = Meteor.users.findOne({ _id: doc.attendedBy }, {
                        fields: {
                            'profile.firstName': true,
                            'profile.lastName': true,
                        }
                    });
                }
                return doc;
            }
        });
    },
    attendedByName: function (attendedBy) {
        if (attendedBy) {
            return attendedBy.profile.firstName + " " + attendedBy.profile.lastName;
        }
    }
});

/*****************************************************************************/
/* ListClientVisits: Lifecycle Hooks */
/*****************************************************************************/
Template.ListClientVisits.onCreated(function () {
});

Template.ListClientVisits.onRendered(function () {
});

Template.ListClientVisits.onDestroyed(function () {
});
