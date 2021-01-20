/* exported ransomCase */
function ransomCase(string) {
  var myString = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 !== 0) {
      myString += string[i].toUpperCase();
    } else {
      myString += string[i].toLowerCase();
    }
  }
  return myString;
}
