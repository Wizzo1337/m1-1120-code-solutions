/* exported getWords */
function getWords(string) {
  var myArray = [];
  if (string === '') {
    return myArray;
  } else {
    return string.split(' ');
  }
}
