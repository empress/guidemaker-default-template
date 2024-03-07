import RouteTemplate from 'ember-route-template';
import GuidesArticle from '../../components/guides-article.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var index = RouteTemplate(setComponentTemplate(precompileTemplate("\n{{!-- template-lint-disable no-curly-component-invocation --}}\n<GuidesArticle @model={{@model.content}} @pages={{@model.pages}} @path=\"index\" @version={{@model.version}} @currentVersion={{@model.currentVersion}} />\n", {
  scope: () => ({
    GuidesArticle
  }),
  strictMode: true
}), templateOnly()));

export { index as default };
//# sourceMappingURL=index.js.map
