/* eslint-disable ember/no-classic-components, prettier/prettier, ember/no-classic-classes, ember/require-tagless-components, ember/no-component-lifecycle-hooks, ember/require-super-in-lifecycle-hooks */
import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  tagName: 'article',
  classNames: 'chapter',
  guidemaker: service(),
  page: service(),
});
