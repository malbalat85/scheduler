Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('/visitmotive/create', {
  name: 'createVisitMotive',
  controller: 'VisitmotiveController',
  action: 'create',
  where: 'client'
});
