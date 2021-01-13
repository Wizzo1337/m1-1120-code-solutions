/* exported reverse */
function reverse(array) {
  var myArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    myArray.push(array[i]);
  }
  return myArray;
}
