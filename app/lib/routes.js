Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
});

Router.onBeforeAction(function (e) {
  // all properties available in the route function
  // are also available here such as this.params
  clearErrors();
  this.next();
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

//Visit motive
Router.route('/visitmotive/', {
  name: 'listVisitMotive',
  controller: 'VisitmotiveController',
  action: 'list',
  where: 'client'
});
/* This must be first to be parsed first */
Router.route('/visitmotive/create', {
  name: 'createVisitMotive',
  controller: 'VisitmotiveController',
  action: 'create',
  where: 'client'
});
Router.route('/visitmotive/:_id', {
  name: 'editVisitMotive',
  controller: 'VisitmotiveController',
  action: 'update',
  where: 'client'
});

//Visit
Router.route('/visit/', {
  name: 'listVisit',
  controller: 'VisitController',
  action: 'list',
  where: 'client'
});
/* This must be first to be parsed first */
Router.route('/visit/create', {
  name: 'createVisit',
  controller: 'VisitController',
  action: 'create',
  where: 'client'
});
Router.route('/visit/:_id', {
  name: 'editVisit',
  controller: 'VisitController',
  action: 'update',
  where: 'client'
});

//Client
Router.route('/client/', {
  name: 'listClients',
  controller: 'ClientController',
  action: 'list',
  //where: 'client'
});
Router.route('/client/create', {
  name: 'createClient',
  controller: 'ClientController',
  action: 'create',
  //where: 'client'
});
Router.route('/client/:_id', {
  name: 'editClient',
  controller: 'ClientController',
  action: 'edit',
  //where: 'client'
});
Router.route('/client/:_id/visits', {
  name: 'listClientVisits',
  controller: 'ClientController',
  action: 'listClientVisits',
  //where: 'client'
});

//Worker
Router.route('/worker', {
  name: 'listWorkers',
  controller: 'WorkerController',
  action: 'list',
});
Router.route('/worker/create', {
  name: 'createWorker',
  controller: 'WorkerController',
  action: 'create',
});
Router.route('/worker/:_id', {
  name: 'editWorker',
  controller: 'WorkerController',
  action: 'edit',
});

//Queue routes
Router.route('/queue/', {
  name: 'listQueue',
  controller: 'QueueController',
  action: 'list',
});
