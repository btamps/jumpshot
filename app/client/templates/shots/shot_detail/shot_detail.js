/*****************************************************************************/
/* ShotDetail: Event Handlers */
/*****************************************************************************/
Template.ShotDetail.events({
	'submit form': function (e, tmpl) {
		e.preventDefault();
		var subject = tmpl.find('input[name=subject]').value;
		var description = tmpl.find('textarea[name=description]').value;
		var id = this._id;

		Shots.update({_id: id}, {
			$set: {
				subject: subject,
				description: description,
				updatedAt: new Date
			}
		});

		Router.go('shots.detail', {_id: id});
	}
});

/*****************************************************************************/
/* ShotDetail: Helpers */
/*****************************************************************************/
Template.ShotDetail.helpers({
	isMyShot: function () {
		return this.userId ===Meteor.userId();
	}
});

/*****************************************************************************/
/* ShotDetail: Lifecycle Hooks */
/*****************************************************************************/
Template.ShotDetail.onCreated(function () {
});

Template.ShotDetail.onRendered(function () {
});

Template.ShotDetail.onDestroyed(function () {
});
