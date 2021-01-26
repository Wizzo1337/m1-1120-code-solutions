/* exported invert */
function invert(source) {
  var myObject = {};
  for (var key in source) {
    myObject[source[key]] = key;
  }
  return myObject;
}
