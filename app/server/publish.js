


Meteor.publish('shots', function () {
  return Shots.find({userId: this.userId});
});