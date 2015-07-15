import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('auth/password-reset', 'Integration | Component | auth/password reset', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{auth/password-reset}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#auth/password-reset}}
      template block text
    {{/auth/password-reset}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
