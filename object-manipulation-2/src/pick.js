/* exported pick */
function pick(source, keys) {
  var myObject = {};
  for (var x in source) {
    if (keys.includes(x) && source[x] !== undefined) {
      myObject[x] = source[x];
    }
  }
  return myObject;
}
