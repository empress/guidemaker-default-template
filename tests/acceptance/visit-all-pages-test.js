import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | visit all pages', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /visit-all-pages', async function(assert) {
    assert.expect(0);
    await visit('/release');

    let store = this.owner.lookup('service:store');
    let pages = store.peekAll('page');

    for (let section of pages.toArray()) {
      for (let page of section.get('pages')) {
        let url = page.url;

        await visit(`/release/${url}`);
      }
    }
  });
});
