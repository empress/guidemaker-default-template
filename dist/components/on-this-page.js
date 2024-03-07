import templateOnly from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{#if @toc}}\n  <div class=\"on-this-page-wrapper\">\n    On this page\n    <hr>\n    <ul>\n      {{#each @toc as |toc|}}\n        <li>\n          <a href=\"#{{toc.id}}\">{{toc.text}}</a>\n        </li>\n      {{/each}}\n    </ul>\n    {{yield}}\n  </div>\n{{/if}}");

var onThisPage = setComponentTemplate(TEMPLATE, templateOnly());

export { onThisPage as default };
//# sourceMappingURL=on-this-page.js.map
