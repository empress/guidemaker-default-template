import RouteTemplate from 'ember-route-template';
import PowerSelect from 'ember-power-select/components/power-select';
import TableOfContents from '../components/table-of-contents.js';
import shortenVersion from '../helpers/shorten-version.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var version = RouteTemplate(setComponentTemplate(precompileTemplate("\n{{!-- template-lint-disable no-action no-curly-component-invocation --}}\n<aside class=\"sidebar\">\n  {{#if @controller.versions}}\n    <PowerSelect @ariaLabel={{@model.version}} @selected={{@model.version}} @renderInPlace={{true}} @options={{@controller.versions}} @onChange={{@controller.actions.selectVersion}} as |version|>\n      {{shortenVersion version}}\n    </PowerSelect>\n  {{/if}}\n\n  <input id=\"toc-toggle\" class=\"toc-toggle visually-hidden\" type=\"checkbox\" />\n  <label for=\"toc-toggle\">Table of Contents <span class=\"visually-hidden\">toggle</span></label>\n\n  <nav class=\"toc-container {{if @controller.versions \"versions\"}}\" aria-label=\"table of contents\">\n    <TableOfContents @data={{@model.pages}} @version={{@model.version}} @currentPage={{@controller.page.currentPage}} @currentSection={{@controller.page.currentSection}} />\n  </nav>\n\n  {{!-- <%= link_to \"&#11014; Back to Top\".html_safe, \"#\", class: \"back-to-top\" %> --}}\n</aside>\n\n{{outlet}}\n", {
  scope: () => ({
    PowerSelect,
    shortenVersion,
    TableOfContents
  }),
  strictMode: true
}), templateOnly()));

export { version as default };
//# sourceMappingURL=version.js.map
