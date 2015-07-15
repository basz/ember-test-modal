import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    outsideClick: function () {
      this.sendAction('dismiss');
    },
    escape: function () {
      this.sendAction('dismiss');
    }
  }
});
