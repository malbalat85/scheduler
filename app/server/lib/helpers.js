  inArray = function(_array, value){
    for (array_values in _array){
      if (_array[array_values] == value){
          return true;
      }
    }
    return false;
  };

  isAdmin = function(){
    userId = Meteor.userId();
    user = Meteor.users.findOne({_id: userId}, {fields: {'profile': true}});
    if (inArray(user.profile.roles, 'admin'))
      return true;
    else
      return false;
  }
