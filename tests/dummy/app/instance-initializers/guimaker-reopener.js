import config from 'dummy/config/environment';

export function initialize(applicationInstance) {
  let guidemakerService = applicationInstance.lookup('service:guidemaker');
  guidemakerService.reopen({
    host: config.guidemaker.host,
    mascots: config.guidemaker.mascots,
  });
}

export default {
  initialize,
};
