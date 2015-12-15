/*****************************************************************************/
/* ShotsList: Event Handlers */
/*****************************************************************************/
Template.ShotsList.events({
});

/*****************************************************************************/
/* ShotsList: Helpers */
/*****************************************************************************/
Template.ShotsList.helpers({
	shots: function () {
		return Shots.find({userId: Meteor.userId()}, {
			sort: { createdAt: -1 }
		});
	},
	isPublishedClass: function () {
		return this.isPublished ? 'published' : '';
	}
});

/*****************************************************************************/
/* ShotsList: Lifecycle Hooks */
/*****************************************************************************/
Template.ShotsList.onCreated(function () {
});

Template.ShotsList.onRendered(function () {
});

Template.ShotsList.onDestroyed(function () {
});
