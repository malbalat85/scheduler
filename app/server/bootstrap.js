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
});
