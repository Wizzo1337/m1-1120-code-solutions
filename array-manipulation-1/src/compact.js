/* exported compact */
function compact(array) {
  var myArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Boolean(array[i]) !== false) {
      myArray.push(array[i]);
    }
  }
  return myArray;
}
