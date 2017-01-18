/* All global helpers */
var helpers = {
  formatDate: function(date){
    return moment(date).format('MM-DD-YYYY');
  },
  formatTimeStamp: function(timestamp){
    return moment(timestamp).format('h:mm:ss a');
  },
};

//Sucks...There is no other way
_.each(helpers, function(value, key){
  Template.registerHelper(key, value);
});
