/*****************************************************************************/
/* ShotPost: Event Handlers */
/*****************************************************************************/
Template.ShotPost.events({
	'click [name=isPublished]': function (e, tmpl) {
		var id = this._id;
		var isPublished = tmpl.find('input').checked;
		Shots.update({_id: id}, {
			$set: {
				isPublished: isPublished
			}
		});
	}
});

/*****************************************************************************/
/* ShotPost: Helpers */
/*****************************************************************************/
Template.ShotPost.helpers({
	isPublishedChecked: function () {
		return this.isPublished ? 'checked' : '';
	}
});

/*****************************************************************************/
/* ShotPost: Lifecycle Hooks */
/*****************************************************************************/
Template.ShotPost.onCreated(function () {
});

Template.ShotPost.onRendered(function () {
});

Template.ShotPost.onDestroyed(function () {
});
