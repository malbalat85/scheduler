//We need to create the default info
Meteor.startup(function () {
  //Create the admin user
  if(Meteor.users.find().count() == 0){
    Accounts.createUser({
      email: 'admin@admin.com',
      password: 'admin',
      verified: true,
      profile: {
        firstName: 'System',
        lastName: 'Admin',
        roles: ['admin', 'worker'],
        email: 'admin@admin.com'
      }
    });
  }
  //Create the Motives info
  if(Visitmotive.find().count() == 0){
    visitmotives = [
      { name: "Income Tax", canexplain: false },
      { name: "Inmigration", canexplain: false },
      { name: "Traducciones", canexplain: false },
      { name: "Notario Público", canexplain: false },
      { name: "Kyani", canexplain: false },
      { name: "Others", canexplain: true }
    ];

    _.each(visitmotives, function(visitmotive) {
      Visitmotive.insert(visitmotive);
    });
  }
  console.log(moment({hour: 8}));
  if(Queue.find({}).count() == 0){
    //Create the first queue
    queue = {
      name: "Regular Costumers",
      openHour: moment({hour: 8}).format(), //From 8am 
      closeHour: moment({hour: 17}).format(), //To 5pm
      active: true
    };
    Queue.insert(queue);
  }
});
