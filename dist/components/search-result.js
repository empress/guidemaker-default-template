import Component, { setComponentTemplate } from '@ember/component';
import { computed } from '@ember/object';
import { inject } from '@ember/service';
import { precompileTemplate } from '@ember/template-compilation';

var TEMPLATE = precompileTemplate("{{!-- template-lint-disable no-triple-curlies no-curly-component-invocation no-implicit-this --}}\n{{#if @result.path}}\n<div class=\"algolia-docsearch-suggestion\nalgolia-docsearch-suggestion__secondary\">\n  <div class=\"algolia-docsearch-suggestion--wrapper\">\n    <div class=\"algolia-docsearch-suggestion--subcategory-column\">\n      <span class=\"algolia-docsearch-suggestion--subcategory-column-text\">{{this.sectionTitle}}</span>\n    </div>\n    <div class=\"algolia-docsearch-suggestion--content\">\n\n      <a href=\"{{href-to \'version.show\' @result.path}}#{{@result.anchor}}\" data-href-to-ignore>\n        <div class=\"algolia-docsearch-suggestion--title\">\n          {{#each this.remainingHeadings as |heading index|}}\n            {{#if index}}\n              >\n            {{/if}}\n            {{{heading.value}}}\n          {{/each}}\n        </div>\n      </a>\n    </div>\n  </div>\n</div>\n{{/if}}\n");

/* eslint-disable ember/no-classic-components, ember/no-classic-classes, ember/require-tagless-components, ember/require-computed-property-dependencies, prettier/prettier, ember/require-computed-macros */
var searchResult = setComponentTemplate(TEMPLATE, Component.extend({
  classNames: ['ds-suggestion'],
  page: inject(),
  sectionTitle: computed('result.path', function () {
    let sectionId = this.result.path.split('/')[0];
    let section = this.page.pages.find(page => page.id === sectionId);
    return section.title;
  }),
  pageHeading: computed('result._highlightResult.headings.[]', function () {
    return this.result._highlightResult.headings[0];
  }),
  remainingHeadings: computed('result._highlightResult.headings.[]', function () {
    return this.result._highlightResult.headings;
  })
}));

export { searchResult as default };
//# sourceMappingURL=search-result.js.map
