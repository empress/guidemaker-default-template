import { getOwner } from '@ember/application';
import Component, { setComponentTemplate } from '@ember/component';
import { set } from '@ember/object';
import { later } from '@ember/runloop';
import algoliasearch from 'algoliasearch';
import { task, timeout } from 'ember-concurrency';
import { precompileTemplate } from '@ember/template-compilation';

var TEMPLATE = precompileTemplate("{{!-- template-lint-disable link-rel-noopener no-curly-component-invocation --}}\n{{#if this.searchFunction}}\n<input\n  id=\'search-input\'\n  type=\'search\'\n  value={{this.value}}\n    oninput={{perform this.search value=\'target.value\'}}\n  placeholder=\"Search the guides\"\n  autocomplete=\"off\"\n>\n\n{{!-- Search results dropdown --}}\n{{#ember-tether\n  target=\'#search-input\'\n  targetAttachment=\'bottom right\'\n  attachment=\'top right\'\n  constraints=this._resultTetherConstraints\n  class=\'ds-dropdown-results\'\n}}\n  {{#if this.response.hits}}\n    <span class=\"ds-suggestions ds-dropdown-menu\">\n      <div class=\"ds-suggestion\">\n        <div class=\"algolia-docsearch-suggestion algolia-docsearch-suggestion__main\">\n          <div class=\"algolia-docsearch-suggestion--category-header\">\n            <span class=\"algolia-docsearch-suggestion--category-header-lvl0\">\n                Search Results\n            </span>\n          </div>\n          <div class=\"algolia-docsearch-suggestion--wrapper\"></div>\n        </div>\n      </div>\n      {{#each this.response.hits as |result|}}\n        {{search-result result=result}}\n      {{/each}}\n      <div class=\"powered-by-algolia\">\n        <a href=\"https://www.algolia.com/\" target=\"_blank\">\n          <img src=\"/images/logos/search-by-algolia.svg\" alt=\"Search Powered by Algolia\">\n        </a>\n      </div>\n    </span>\n  {{/if}}\n{{/ember-tether}}\n{{/if}}\n");

/* eslint-disable ember/no-classic-components, ember/no-classic-classes, ember/require-tagless-components, prettier/prettier, ember/no-actions-hash */
const SEARCH_DEBOUNCE_PERIOD = 300;
var searchInput = setComponentTemplate(TEMPLATE, Component.extend({
  classNames: ['search-input'],
  _resultTetherConstraints: Object.freeze([{
    to: 'window',
    pin: ['left', 'right']
  }]),
  init() {
    this._super(...arguments);
    const config = getOwner(this).resolveRegistration('config:environment');
    const {
      algoliaId,
      algoliaKey,
      indexName
    } = config['algolia'] || {};
    if (algoliaId && algoliaKey && indexName) {
      this.client = algoliasearch(algoliaId, algoliaKey);
      this.index = this.client.initIndex(indexName);
    }
  },
  search: task(function* (query) {
    yield timeout(SEARCH_DEBOUNCE_PERIOD);
    if (!query) {
      return set(this, 'response', null);
    }
    const searchObj = {
      hitsPerPage: 15,
      query
    };
    if (this.projectVersion && this.projectVersion.match(/\d+\.\d+\.\d+/)) {
      searchObj.facetFilters = [[`version:${this.projectVersion}`]];
    }
    let res = yield this.index.search(searchObj);
    return set(this, 'response', res);
  }).restartable(),
  actions: {
    oninput(value) {
      set(this, 'value', value);
      if (value) {
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
}));

export { searchInput as default };
//# sourceMappingURL=search-input.js.map
