import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class NoteComponent extends Component {
  @service guidemaker;
}
