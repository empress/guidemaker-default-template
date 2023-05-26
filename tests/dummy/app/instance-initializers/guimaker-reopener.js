import config from 'dummy/config/environment';

export function initialize(applicationInstance) {
  let guidemakerService = applicationInstance.lookup('service:guidemaker');
  guidemakerService.reopen({
    mascots: config.guidemaker.mascots,
    components: config.guidemaker.components,
  });
}

export default {
  initialize,
};
