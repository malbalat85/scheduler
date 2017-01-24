/*****************************************************************************/
/* Appointment: Event Handlers */
/*****************************************************************************/
Template.AppointmentCreate.events({
});

/*****************************************************************************/
/* Appointment: Helpers */
/*****************************************************************************/
Template.AppointmentCreate.helpers({
  visitmotives: function(){
    return Visitmotive.find().map(function(vm){
      return {label: vm.name, value: vm._id};
    });
  },
});

/*****************************************************************************/
/* Appointment: Lifecycle Hooks */
/*****************************************************************************/
Template.AppointmentCreate.onCreated(function () {
    //Create a clock 
    function update() {
        $('#clock').html(moment().format('MMMM D, YYYY H:mm:ss'));
    }
    setInterval(update, 1000);
});

Template.AppointmentCreate.onRendered(function () {
});

Template.AppointmentCreate.onDestroyed(function () {
});
