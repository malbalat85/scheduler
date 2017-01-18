/*****************************************************************************/
/* CreateVisit: Event Handlers */
/*****************************************************************************/
Template.CreateVisit.events({
  'click input[type=checkbox]': function(e) {
    var inp_motives = $('input[type=checkbox]:checked');
    var explain = false;
    $.each(inp_motives, function( key, motive){
        var visitm_temp = Visitmotive.findOne({_id: motive.value});
        if (visitm_temp.canexplain){
          explain = true;
        }
      });
    if (explain){
      $('textarea[name="explanation"]').parent().show().removeAttr('disabled');
    } else {
      $('textarea[name="explanation"]').parent().hide().attr('disabled', 'disabled');
    }
  }
});

/*****************************************************************************/
/* CreateVisit: Helpers */
/*****************************************************************************/
Template.CreateVisit.helpers({
  visitmotives: function(){
    return Visitmotive.find().map(function(vm){
      return {label: vm.name, value: vm._id};
    });
  },
  explain: function(motives_checkboxes){
    $.each(motives_checkboxes, function(key, value){
      var visitm_temp = Visitmotive.findOne({_id: motive.value});
      if (visitm_temp.canexplain){
        return true;
      }
    });
    return false;
  },
});

/*****************************************************************************/
/* CreateVisit: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateVisit.onCreated(function () {
});

Template.CreateVisit.onRendered(function () {
});

Template.CreateVisit.onDestroyed(function () {
});
