/* eslint-disable prettier/prettier */
'use strict';

var Funnel = require('broccoli-funnel');
const { join } = require('path');

module.exports = {
  name: require('./package').name,

  options: {
    sassOptions: {
      includePaths: [
        'node_modules/ember-power-select/app/styles',
        'node_modules/ember-basic-dropdown/app/styles',
      ]
    }
  },

  treeForPublic: function() {
    return new Funnel(join(this.root, 'public'));
  },

  contentFor: function(type, config) {
    if (type === 'body-footer') {
      var emberBasicDropdown = this.addons.find(addon => addon.name === 'ember-power-select');
      return emberBasicDropdown.contentFor(type, config);
    } else {
      return '';
    }
  }
};
