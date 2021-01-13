/* exported initial */
function initial(array) {
  var myArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    myArray.push(array[i]);
  }
  return myArray;
}
