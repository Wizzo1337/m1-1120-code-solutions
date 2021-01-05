/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var myArray = [];
  for (var i = 0; i < words.length; i++) {
    words[i] += suffix;
    myArray.push(words[i]);
  }
  return myArray;
}
