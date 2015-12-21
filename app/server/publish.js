


Meteor.publish('shots', function () {
  if(!this.userId) return this.ready();

  return Shots.find({userId: this.userId});
});

Meteor.publish('shot', function (id) {
  if(!this.userId) return this.ready();

  var shot = Shots.findOne({_id: id});

  return [
    Meteor.users.find({_id: shot.userId}, {fields: {profile: 1}}),
    Shots.find({_id: id})
  ];
});

Meteor.publish('users', function () {
  if(!this.userId) return this.ready();
  return Meteor.users.find({}, {fields: {profile: 1}});
});

Meteor.publish('user', function (userId) {
  if(!this.userId) return this.ready();

  return [
    Meteor.users.find({_id: userId}, {fields: {profile: 1}}),
    Shots.find({userId: userId})
  ];
});
