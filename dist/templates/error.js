import RouteTemplate from 'ember-route-template';
import contains from '../helpers/contains.js';
import { array } from '@ember/helper';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var error = RouteTemplate(setComponentTemplate(precompileTemplate("\n\n{{!-- template-lint-disable no-implicit-this no-obscure-array-access require-valid-alt-text --}}\n<article class=\"x404\" data-test-error-page>\n  {{#if (contains @model.errors.0.status (array \"404\" \"403\"))}}\n    <img src=\"/images/fishy.png\" title=\"ACK! 404 FRIEND, YOU'RE IN THE WRONG PLACE\">\n    <h1 class=\"whoops\" data-test-error-message>Ack! 404 friend, you're in the wrong place</h1>\n\n    <p>\n      This page wasn't found. If you were looking for documentation, please try\n      the <a href=\"http://guides.emberjs.com\">Guides</a> section of the site. If you expected\n      something else to be here, please <a href=\"https://github.com/ember-learn/guides-app/issues\">file a ticket</a>.\n    </p>\n  {{else}}\n    <img src=\"/images/fishy.png\" title=\"ACK! An unknown error has occured!\">\n    <h1 class=\"whoops\">Ack! An unknown error has occured!</h1>\n\n    <p>\n      We're not quite sure what happened. If you were looking for documentation, please try\n      the <a href=\"http://guides.emberjs.com\">Guides</a> section of the site. If you expected\n      something else to be here, please <a href=\"https://github.com/ember-learn/guides-app/issues\">file a ticket</a>.\n    </p>\n  {{/if}}\n</article>\n", {
  scope: () => ({
    contains,
    array
  }),
  strictMode: true
}), templateOnly()));

export { error as default };
//# sourceMappingURL=error.js.map
