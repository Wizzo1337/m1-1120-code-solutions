/* exported filterOutNulls */
function filterOutNulls(values) {
  var myArray = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      myArray.push(values[i]);
    }
  }
  return myArray;
}
