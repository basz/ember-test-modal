import Ember from 'ember';

export default Ember.Controller.extend({
  action: null,
  previousTransition: null,
  actionObserver: function () {
    var value = this.get('action');
    this.setProperties({
      'modalAuthenticateUser': value === 'authenticate',
      'modalCreateAccount': value === 'create-account',
      'modalPasswordReset': value === 'password-reset'
    });
    console.log('"action" observed', {
      'modalAuthenticateUser': this.get('modalAuthenticateUser'),
      'modalCreateAccount': this.get('modalCreateAccount'),
      'modalPasswordReset': this.get('modalPasswordReset')
    });
  }.observes('action'),
  modalAuthenticateUser: false,
  modalCreateAccount: false,
  modalPasswordReset: false,
  actions: {
    modalActionDismissed: function () {
      this.set('action', null);

      this.transitionToRoute('index');
    }
  }
});
