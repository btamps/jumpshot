/*****************************************************************************/
/* CreateShotPost: Event Handlers */
/*****************************************************************************/
Template.CreateShotPost.events({
	'submit form': function (e, tmpl) {
		e.preventDefault();

		var subject = tmpl.find('input').value;

		Shots.insert({
			subject: subject,
			createdAt: new Date,
			isPublished: false,
			userId: Meteor.userId()
		});

		tmpl.find('form').reset();
	}
});

/*****************************************************************************/
/* CreateShotPost: Helpers */
/*****************************************************************************/
Template.CreateShotPost.helpers({
});

/*****************************************************************************/
/* CreateShotPost: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateShotPost.onCreated(function () {
});

Template.CreateShotPost.onRendered(function () {
});

Template.CreateShotPost.onDestroyed(function () {
});
