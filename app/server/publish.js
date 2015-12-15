


Meteor.publish('shots', function () {
  return Shots.find({userId: this.userId});
});

Meteor.publish('shot', function (id) {
  return Shots.find({_id: id});
});