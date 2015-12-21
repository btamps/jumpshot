/*****************************************************************************/
/* UsersList: Event Handlers */
/*****************************************************************************/
Template.UsersList.events({
});

/*****************************************************************************/
/* UsersList: Helpers */
/*****************************************************************************/
Template.UsersList.helpers({
  users: function () {
    return Meteor.users.find({_id: {$ne: Meteor.userId()}});
  }
});

/*****************************************************************************/
/* UsersList: Lifecycle Hooks */
/*****************************************************************************/
Template.UsersList.onCreated(function () {
});

Template.UsersList.onRendered(function () {
});

Template.UsersList.onDestroyed(function () {
});
