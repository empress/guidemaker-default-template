import RouteTemplate from 'ember-route-template';
import PowerSelect from 'ember-power-select/components/power-select';
import TableOfContents from '../components/table-of-contents';
import shortenVersion from '../helpers/shorten-version';

export default RouteTemplate(<template>
{{!-- template-lint-disable no-action no-curly-component-invocation --}}
<aside class="sidebar">
  {{#if @controller.versions}}
    <PowerSelect @ariaLabel={{@model.version}} @selected={{@model.version}} @renderInPlace={{true}} @options={{@controller.versions}} @onChange={{@controller.actions.selectVersion}} as |version|>
      {{shortenVersion version}}
    </PowerSelect>
  {{/if}}

  <input id="toc-toggle" class="toc-toggle visually-hidden" type="checkbox" />
  <label for="toc-toggle">Table of Contents <span class="visually-hidden">toggle</span></label>

  <nav class='toc-container {{if @controller.versions 'versions'}}' aria-label='table of contents'>
    <TableOfContents @data={{@model.pages}} @version={{@model.version}} @currentPage={{@controller.page.currentPage}} @currentSection={{@controller.page.currentSection}} />
  </nav>

  {{!-- <%= link_to "&#11014; Back to Top".html_safe, "#", class: "back-to-top" %> --}}
</aside>

{{outlet}}
</template>);
