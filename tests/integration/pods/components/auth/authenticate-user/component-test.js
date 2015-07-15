import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('auth/authenticate-user', 'Integration | Component | auth/authenticate user', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{auth/authenticate-user}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#auth/authenticate-user}}
      template block text
    {{/auth/authenticate-user}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
