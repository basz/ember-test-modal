import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('authentication', {path: 'a'}, function() {
    this.modal('authentication/authenticate-user', { actions: {dismiss: "modalActionDismissed"}, withParams: 'modalAuthenticateUser', dismissWithOutsideClick: false, dismissWithEscape: false });
    this.modal('authentication/create-account', { actions: {dismiss: "modalActionDismissed"}, withParams: 'modalCreateAccount', dismissWithOutsideClick: false, dismissWithEscape: false });
    this.modal('authentication/password-reset', { actions: {dismiss: "modalActionDismissed"}, withParams: 'modalPasswordReset', dismissWithOutsideClick: false, dismissWithEscape: false });
    this.route('authenticate', {path: 'sign-in'});
    this.route('password-reset', {path: 'password-reset'});
    this.route('create-account', {path: 'create-account'});
  });
});

export default Router;
