import { helper } from '@ember/component/helper';

/* eslint-disable prettier/prettier */
function shortenVersion([version = '']) {
  return version.slice(version.indexOf('v') + 1 || 0, version.lastIndexOf('.') === version.indexOf('.') ? version.length : version.lastIndexOf('.'));
}
var shortenVersion$1 = helper(shortenVersion);

export { shortenVersion$1 as default, shortenVersion };
//# sourceMappingURL=shorten-version.js.map
