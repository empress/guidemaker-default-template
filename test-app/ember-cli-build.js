'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

const webpackConfig = {
  module: {
    rules: [
      {
        test: function (specifier) {
          return !specifier.endsWith('.css') && !specifier.endsWith('.js');
        },
        issuer: function (issuer) {
          if (issuer.endsWith('.css')) {
            return true;
          }
        },
        type: 'asset/resource',
      },
    ],
  },
};

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    autoImport: {
      watchDependencies: ['guidemaker-default-template'],
      webpack: webpackConfig,
    },
  });

  const { maybeEmbroider } = require('@embroider/test-setup');
  return maybeEmbroider(app, {
    packagerOptions: {
      webpackConfig,
    },
  });
};
