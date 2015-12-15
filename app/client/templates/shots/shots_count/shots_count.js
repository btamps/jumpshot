/*****************************************************************************/
/* ShotsCount: Event Handlers */
/*****************************************************************************/
Template.ShotsCount.events({
});

/*****************************************************************************/
/* ShotsCount: Helpers */
/*****************************************************************************/
Template.ShotsCount.helpers({
	publishedCount: function () {
		return Shots.find({userId: Meteor.userId(), isPublished: true}).count();
	},
	totalCount: function () {
		return Shots.find({userId: Meteor.userId()}).count();
	}
});

/*****************************************************************************/
/* ShotsCount: Lifecycle Hooks */
/*****************************************************************************/
Template.ShotsCount.onCreated(function () {
});

Template.ShotsCount.onRendered(function () {
});

Template.ShotsCount.onDestroyed(function () {
});
