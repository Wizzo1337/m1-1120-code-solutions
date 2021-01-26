/* exported defaults */

function defaults(target, source) {
  for (var x in source) {
    if (!(x in target)) {
      target[x] = source[x];
    }
  }
}
