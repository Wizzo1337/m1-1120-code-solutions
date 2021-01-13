/* exported tail */
function tail(array) {
  var myArray = [];
  for (var i = 1; i < array.length; i++) {
    myArray.push(array[i]);
  }
  return myArray;
}
