/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var firstChar = string.charAt(firstIndex);
  var secondChar = string.charAt(secondIndex);
  var stringArray = string.split('');
  stringArray.splice(firstIndex, 1, secondChar);
  stringArray.splice(secondIndex, 1, firstChar);
  return stringArray.join('');
}
