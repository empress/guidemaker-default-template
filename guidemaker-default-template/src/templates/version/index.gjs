import RouteTemplate from 'ember-route-template';
import GuidesArticle from '../../components/guides-article';

export default RouteTemplate(<template>
{{!-- template-lint-disable no-curly-component-invocation --}}
<GuidesArticle @model={{@model.content}} @pages={{@model.pages}} @path='index' @version={{@model.version}} @currentVersion={{@model.currentVersion}} />
</template>);
