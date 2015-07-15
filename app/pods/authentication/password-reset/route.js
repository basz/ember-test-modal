import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function() {
    var controller = this.controllerFor('authentication');
    controller.set('action', this.routeName.split('.').pop());
  }
});
