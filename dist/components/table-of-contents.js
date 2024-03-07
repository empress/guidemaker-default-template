import Component, { setComponentTemplate } from '@ember/component';
import { computed } from '@ember/object';
import { inject } from '@ember/service';
import { precompileTemplate } from '@ember/template-compilation';

var TEMPLATE = precompileTemplate("{{! template-lint-disable simple-unless no-curly-component-invocation }}\n{{!-- #{build_toc_for(pages)} --}}\n{{#each @data as |page|}}\n  {{#unless (or page.skipToc (get page \'skip-toc\'))}}\n    <li class=\"{{this.tocLevel}} {{if (eq @currentPage.url page.url) \'selected\'}}\">\n      {{#if page.pages}}\n        {{#cp-panel open=(unless this.guidemaker.collapseToc true (eq @currentSection.id page.id)) as |p|}}\n          {{#if this.fastboot.isFastBoot}}\n            <LinkTo @route=\"version.show\" @model={{page.id}} @activeClass=\"selected\" class=\"cp-Panel-toggle\" data-test-toc-link={{page.title}}>\n              {{page.title}}\n            </LinkTo>\n          {{else}}\n            {{#p.toggle data-test-toc-title=page.title}}\n              {{page.title}}\n            {{/p.toggle}}\n          {{/if}}\n\n          {{#p.body}}\n            {{table-of-contents data=page.pages currentPage=@currentPage level=(inc this.level)}}\n          {{/p.body}}\n        {{/cp-panel}}\n      {{else}}\n        <LinkTo @route=\"version.show\" @model={{page.url}} @activeClass=\"selected\" data-test-toc-link={{page.title}}>\n          {{page.title}}\n        </LinkTo>\n      {{/if}}\n    </li>\n  {{/unless}}\n{{/each}}\n");

/* eslint-disable ember/no-classic-components, ember/no-classic-classes, ember/require-tagless-components, prettier/prettier */
var TableOfContents = setComponentTemplate(TEMPLATE, Component.extend({
  fastboot: inject(),
  guidemaker: inject(),
  level: '0',
  tagName: 'ol',
  tocLevel: computed('level', function () {
    return `toc-level-${this.level}`;
  }),
  classNameBindings: ['tocLevel']
}));

export { TableOfContents as default };
//# sourceMappingURL=table-of-contents.js.map
