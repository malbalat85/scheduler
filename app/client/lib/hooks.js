//Debug only
SimpleSchema.debug = true;

AutoForm.hooks({
  insertVisitMotiveForm: {
    onSuccess: function(formType, doc) {
      Router.go('listVisitMotive');
    },
    onError: function(name, error) {
    }
  },
  editVistsMotiveForm: {
    onSuccess: function(){
      Router.go('listVisitMotive');
    },
  },
  createClientForm: {
    onSuccess: function(){
      Router.go('listClients');
    },
  },
  editClientForm: {
    onSuccess: function(){
      Router.go('listClients');
    },
  },
});
