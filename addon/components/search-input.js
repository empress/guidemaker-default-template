/* eslint-disable ember/no-classic-components, ember/no-classic-classes, ember/require-tagless-components, prettier/prettier, ember/no-actions-hash */
import { getOwner } from '@ember/application';
import Component from '@ember/component';
import { set } from '@ember/object';
import { later } from '@ember/runloop';
import algoliasearch from 'algoliasearch';
import { task, timeout } from 'ember-concurrency';

import layout from '../templates/components/search-input';

const SEARCH_DEBOUNCE_PERIOD = 300;

export default Component.extend({
  layout,

  classNames: ['search-input'],

  _resultTetherConstraints: Object.freeze([
    {
      to: 'window',
      pin: ['left','right']
    }
  ]),

  init() {
    this._super(...arguments);
    const config = getOwner(this).resolveRegistration('config:environment');

    const { algoliaId, algoliaKey, indexName } = config['algolia'] || {};

    if(algoliaId && algoliaKey && indexName) {
      this.searchFunction = true;
      this.client = algoliasearch(algoliaId, algoliaKey);
      this.index = this.client.initIndex(indexName);
    }
  },

  search: task(function * (query) {
    yield timeout(SEARCH_DEBOUNCE_PERIOD);

    if(!query) {
      return set(this, 'response', null);
    }

    const searchObj = {
      hitsPerPage: 15,
    };

    let res = yield this.index.search(query, searchObj);

    return set(this, 'response', res);
  }).restartable(),

  actions: {
    oninput(value) {
      set(this, 'value', value);
      if(value) {
        this.search.perform(value);
      }
    },

    onfocus() {
      set(this, '_focused', true);
    },

    onblur() {
      later(this, function () {
        set(this, '_focused', false);
      }, 200);
    }

  }
});
