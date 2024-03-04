import { helper } from '@ember/component/helper';

export default helper(function ([needle, haystack]) {
  return haystack.includes(needle);
});
