import RouteTemplate from 'ember-route-template';
import GuidesArticle from '../../components/guides-article';

export default RouteTemplate(<template>
{{!-- template-lint-disable no-curly-component-invocation no-implicit-this --}}
<GuidesArticle @model={{@model.content}} @pages={{@model.pages}} @path={{@model.path}} @version={{@model.version}} @currentVersion={{@model.currentVersion}} />
</template>);
