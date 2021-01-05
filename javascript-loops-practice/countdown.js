/* exported countdown */

function countdown(number) {
  var array = [];
  var i;
  for (i = number; i >= 0; i--) {
    array.push(i);
  }
  return array;
}
