import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('auth/create-account', 'Integration | Component | auth/create account', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{auth/create-account}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#auth/create-account}}
      template block text
    {{/auth/create-account}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
