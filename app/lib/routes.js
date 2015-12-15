Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('/shots/:_id', {
  name: 'shots.detail',
  controller: 'ShotsController',
  action: 'detail',
  where: 'client'
});