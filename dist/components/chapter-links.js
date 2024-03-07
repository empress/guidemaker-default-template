import Component, { setComponentTemplate } from '@ember/component';
import { inject } from '@ember/service';
import { precompileTemplate } from '@ember/template-compilation';

var TEMPLATE = precompileTemplate("{{! template-lint-disable no-curly-component-invocation }}\n{{#if this.page.previousPage}}\n  <LinkTo @route=\"version.show\" @model={{this.page.previousPage.url}} class=\"previous-guide\">\n    {{this.page.previousPage.title}}\n  </LinkTo>\n{{/if}}\n\n{{#if this.page.nextPage}}\n  <LinkTo @route=\"version.show\" @model={{this.page.nextPage.url}} class=\"next-guide\">\n    {{#if this.page.isLastPage}}\n      We\'ve finished covering {{this.page.currentSection.title}}. Next up: {{this.page.nextSection.title}} - {{this.page.nextPage.title}}\n    {{else if this.page.nextIsFirstPage}}\n      {{this.page.nextSection.title}} - {{this.page.nextPage.title}}\n    {{else}}\n      {{this.page.nextPage.title}}\n    {{/if}}\n  </LinkTo>\n{{/if}}");

/* eslint-disable ember/no-classic-components, ember/no-classic-classes, ember/require-tagless-components */
var chapterLinks = setComponentTemplate(TEMPLATE, Component.extend({
  tagName: 'footer',
  page: inject()
}));

export { chapterLinks as default };
//# sourceMappingURL=chapter-links.js.map
