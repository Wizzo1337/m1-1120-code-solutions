/* exported filterOutStrings */
function filterOutStrings(values) {
  var myArray = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof (values[i]) !== 'string') {
      myArray.push(values[i]);
    }
  }
  return myArray;
}
