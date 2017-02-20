/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
  activateUser: function (userId) {
    if (isAdmin()) {
      //This is really a pain but you can di this in Mongo
      userObj = Meteor.users.findOne({ '_id': userId }, { fields: { 'verified': true } });
      Meteor.users.update({
        '_id': userId
      }, {
          $set: {
            'verified': !userObj.verified
          }
        });
    }
  },
  updateWorkerProfile: function (workerId, profile) {
    console.log(profile);
    if (isAdmin()) {
      if (profile.password) {
        Accounts.setPassword(workerId, profile.password);
        delete profile.password;
      }
      Meteor.users.update({ '_id': workerId }, { $set: { 'profile': profile } });
    }
  },
  scheduleVisit: (client, visit, queue_id) => {
    /* Create client if not exist 
    *  else add a vist to the client and the queue 
    */

    visit_number_suffix = "UN"

    /** Todo: Refactor usign the callback
     * Visit.insert(visit, function(error, result){
     *  if (error) return error;
     *  if (result) return result;
     * });
    */
    /*
    'John Cooper'.split(' ').map(function (s) { return s.charAt(0); }).join('');
     */

    queue = Queue.findOne({ _id: queue_id });
    if (queue) {
      if (queue.visits.length > 0) {
        console.log(queue.visits.length);
        //Gets a "N#" patter to number using queue initials
        visit.number = queue.name.split(' ').map(function (s) { return s.charAt(0) }).join('') + (queue.visits.length + 1);
      } else {
        visit.number = visit_number_suffix + '1';
      }
    } else {
      //If not queue just use default
      visit.number = visit_number_suffix + '1';
    }

    console.log(client);
    console.log(visit);
    console.log(queue_id);

    //Create the visit first
    let new_visit = Visit.insert(visit);

    client_tmp = Client.findOne({ 'email': client.email });
    if (client_tmp) {
      console.log('Client found:' + client_tmp.email);
      //Added to the client and update all its info
      let new_client = Client.update(
        { _id: client_tmp._id },
        {
          $push: { visits: new_visit },
          $set: {
            address: client.address,
            name: client.name,
            midname: client.midname,
            lastname: client.lastname,
            phone: client.phone
          }
        }
      );
    } else {
      let new_client = Client.insert({
        name: client.name,
        midname: client.midname,
        lastname: client.lastname,
        email: client.email,
        phone: client.phone,
        visits: [new_visit],
        address: client.address,
      });
      console.log('Created new client: ' + new_client);

    }

    //Set it at the active queue 
    //TODO: make this better, letting the client chooses the queue to insert the visit
    Queue.update({ _id: queue_id, active: true }, { $push: { visits: new_visit } });
  },
  /** Activate | deactivate a queue */
  activateQueue: function (queueId) {
    check(queueId, String);
    if (isAdmin()) {
      //This is really a pain but you can't do this in Mongo
      queueObj = Queue.findOne({ '_id': queueId }, { fields: { 'active': true } });
      if (queueObj) {
        return Queue.update({
          '_id': queueId
        }, {
            $set: {
              'active': !queueObj.active
            }
          });
      }
    }
  },
});
