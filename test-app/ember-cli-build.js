'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

const webpackConfig = {
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp|woff|woff2|ttf|eot)$/i,
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
