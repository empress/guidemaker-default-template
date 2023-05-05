import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | note', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the provided mascot', async function (assert) {
    await render(hbs`<Note @mascot="tomster" />`);
    assert.dom('[data-test-note-heading]').hasText('Tomster says...');
  });

  test('it renders zoey when providing an unknown mascot', async function (assert) {
    await render(hbs`<Note @mascot="toaster" />`);
    assert.dom('[data-test-note-heading]').hasText('Zoey says...');
  });

  test('it renders zoey when providing no mascot', async function (assert) {
    await render(hbs`<Note />`);
    assert.dom('[data-test-note-heading]').hasText('Zoey says...');
  });
});
