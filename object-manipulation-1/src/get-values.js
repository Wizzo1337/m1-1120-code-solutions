/* exported getValues */
function getValues(object) {
  var myArray = [];
  for (var x in object) {
    myArray.push(object[x]);
  }
  return myArray;
}
