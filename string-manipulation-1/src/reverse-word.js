/* exported reverseWord */
function reverseWord(word) {
  var myWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    myWord += word[i];
  }
  return myWord;
}
