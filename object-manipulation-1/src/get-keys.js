/* exported getKeys */
function getKeys(object) {
  var myArray = [];
  for (var x in object) {
    myArray.push(x);
  }
  return myArray;
}
