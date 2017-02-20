//Debug only
SimpleSchema.debug = true;

AutoForm.hooks({
  insertVisitMotiveForm: {
    onSuccess: function (formType, doc) {
      Bert.alert('Visit motive created', 'success');
      Router.go('listVisitMotive');
    },
    onError: function (name, error) {
      Bert.alert({title: 'Error', message: error.message, type: 'danger'});
    }
  },
  editVistsMotiveForm: {
    onSuccess: function () {
      Bert.alert('Visit motive updated', 'success');
      Router.go('listVisitMotive');
    },
  },
  createClientForm: {
    onSuccess: function () {
      Bert.alert('Client created', 'success');
      Router.go('listClients');
    },
  },
  editClientForm: {
    onSuccess: function () {
      Bert.alert('Client updated', 'success');
      Router.go('listClients');
    },
  },
});
