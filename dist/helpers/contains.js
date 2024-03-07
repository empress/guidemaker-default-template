import { helper } from '@ember/component/helper';

var contains = helper(function ([needle, haystack]) {
  return haystack.includes(needle);
});

export { contains as default };
//# sourceMappingURL=contains.js.map
