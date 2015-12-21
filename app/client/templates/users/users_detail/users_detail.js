/*****************************************************************************/
/* UsersDetail: Event Handlers */
/*****************************************************************************/
Template.UsersDetail.events({
});

/*****************************************************************************/
/* UsersDetail: Helpers */
/*****************************************************************************/
Template.UsersDetail.helpers({
  shots: function () {
    var user = this;
    return Shots.find({userId: user._id}, {sort: {createdAt: -1}});
  }
});

/*****************************************************************************/
/* UsersDetail: Lifecycle Hooks */
/*****************************************************************************/
Template.UsersDetail.onCreated(function () {
});

Template.UsersDetail.onRendered(function () {
});

Template.UsersDetail.onDestroyed(function () {
});
