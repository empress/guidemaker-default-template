import Component, { setComponentTemplate } from '@ember/component';
import { inject } from '@ember/service';
import { computed } from '@ember/object';
import { precompileTemplate } from '@ember/template-compilation';

var TEMPLATE = precompileTemplate("{{! template-lint-disable link-rel-noopener simple-unless no-curly-component-invocation }}\n<div class=\"guides-article-wrapper\">\n  <div class=\"guides-article-content\">\n    {{#unless (eq @version @currentVersion)}}\n      <div class=\"old-version-warning\">\n        <i class=\"icon-attention-circled\"></i><strong>Old Guides - </strong>You are viewing the guides for {{this.guidemaker.title}} {{@version}}.\n\n        <LinkTo @route=\'version.show\' @models={{array \'release\' @path}} class=\"btn\"> VIEW {{@currentVersion}} </LinkTo>\n      </div>\n    {{/unless}}\n\n    {{#if this.guidemaker.sourceRepo}}\n      <a href=\"{{this.guidemaker.sourceRepo}}/edit/{{or this.guidemaker.sourceBranch \"master\"}}/guides/{{this.editVersion}}{{@model.id}}.md\"\n      target=\"_blank\" class=\"edit-page icon-pencil\">Edit Page</a>\n    {{/if}}\n\n    <h1>\n      {{this.page.currentPage.title}}\n    </h1>\n    <hr>\n\n    <MarkdownToHtml @markdown={{@model.content}} @extensions=\'showdown-section-groups\' />\n\n    {{chapter-links pages=@pages}}\n  </div>\n\n  <div class=\"guides-article-toc\">\n    <OnThisPage @toc={{@model.toc}} />\n  </div>\n</div>\n");

/* eslint-disable ember/no-classic-components, prettier/prettier, ember/no-classic-classes, ember/require-tagless-components, ember/no-component-lifecycle-hooks, ember/require-super-in-lifecycle-hooks */
var GuidesArticle = setComponentTemplate(TEMPLATE, Component.extend({
  tagName: 'article',
  classNames: 'chapter',
  guidemaker: inject(),
  page: inject(),
  editVersion: computed('currentVersion', 'page.currentVersion', 'this.page.currentVersion', 'version', function () {
    if (this.page.currentVersion === 'release') {
      return '';
    }
    if (this.version === this.currentVersion) {
      return 'release/';
    }
    return `${this.page.currentVersion}/`;
  })
}));

export { GuidesArticle as default };
//# sourceMappingURL=guides-article.js.map
