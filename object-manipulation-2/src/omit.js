/* exported omit */
function omit(source, keys) {
  var myObject = {};
  for (var x in source) {
    if (!keys.includes(x)) {
      myObject[x] = source[x];
    }
  }
  return myObject;
}
