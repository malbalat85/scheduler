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
  action: 'listAppointments',
});

Router.route('/queue/:queue_id/visit/create', {
  name: 'createVisitHome',
  controller: 'HomeController',
  action: 'createAppointment',
});

//Admin page
Router.route('/admin', {
  name: 'admin',
  controller: 'HomeController',
  layoutTemplate: 'MasterAdminLayout'
});

//Visit motive
Router.route('admin/visitmotive/', {
  name: 'listVisitMotive',
  controller: 'VisitmotiveController',
  action: 'list',
  where: 'client',
  layoutTemplate: 'MasterAdminLayout'
});
/* This must be first to be parsed first */
Router.route('admin/visitmotive/create', {
  name: 'createVisitMotive',
  controller: 'VisitmotiveController',
  action: 'create',
  where: 'client',
  layoutTemplate: 'MasterAdminLayout'
});
Router.route('admin/visitmotive/:_id', {
  name: 'editVisitMotive',
  controller: 'VisitmotiveController',
  action: 'update',
  where: 'client',
  layoutTemplate: 'MasterAdminLayout'
});

//Visit
Router.route('admin/visit/', {
  name: 'listVisit',
  controller: 'VisitController',
  action: 'list',
  where: 'client',
  layoutTemplate: 'MasterAdminLayout'
});
/* This must be first to be parsed first */
Router.route('admin/visit/create', {
  name: 'createVisit',
  controller: 'VisitController',
  action: 'create',
  where: 'client',
  layoutTemplate: 'MasterAdminLayout'
});
Router.route('admin/visit/:_id', {
  name: 'editVisit',
  controller: 'VisitController',
  action: 'update',
  where: 'client',
  layoutTemplate: 'MasterAdminLayout'
});

//Client
Router.route('admin/client/', {
  name: 'listClients',
  controller: 'ClientController',
  action: 'list',
  layoutTemplate: 'MasterAdminLayout',
  //where: 'client'
});
Router.route('admin/client/create', {
  name: 'createClient',
  controller: 'ClientController',
  action: 'create',
  layoutTemplate: 'MasterAdminLayout',
  //where: 'client'
});
Router.route('admin/client/:_id', {
  name: 'editClient',
  controller: 'ClientController',
  action: 'edit',
  layoutTemplate: 'MasterAdminLayout',
  //where: 'client'
});
Router.route('admin/client/:_id/visits', {
  name: 'listClientVisits',
  controller: 'ClientController',
  action: 'listClientVisits',
  layoutTemplate: 'MasterAdminLayout',
  //where: 'client'
});

//Worker
Router.route('admin/worker', {
  name: 'listWorkers',
  controller: 'WorkerController',
  action: 'list',
  layoutTemplate: 'MasterAdminLayout',
});
Router.route('admin/worker/create', {
  name: 'createWorker',
  controller: 'WorkerController',
  action: 'create',
  layoutTemplate: 'MasterAdminLayout',
});
Router.route('admin/worker/:_id', {
  name: 'editWorker',
  controller: 'WorkerController',
  action: 'edit',
  layoutTemplate: 'MasterAdminLayout',
});

//Queue routes
Router.route('admin/queue/', {
  name: 'listQueue',
  controller: 'QueueController',
  action: 'listQueues',
  layoutTemplate: 'MasterAdminLayout',
});
Router.route('admin/queue/:_id/visits', {
  name: 'listQueueVisits',
  controller: 'QueueController',
  action: 'listQueueVisits',
  layoutTemplate: 'MasterAdminLayout',
});
Router.route('admin/queue/:_id', {
  name: 'editQueue',
  controller: 'QueueController',
  action: 'editQueue',
  layoutTemplate: 'MasterAdminLayout',
});
Router.route('admin/queue/create', {
  name: 'createQueue',
  controller: 'QueueController',
  action: 'createQueue',
  layoutTemplate: 'MasterAdminLayout',
});
