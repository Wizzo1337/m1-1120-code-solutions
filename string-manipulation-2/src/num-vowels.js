/* exported numVowels */
function numVowels(string) {
  var vowels = 'aeiouAEIOU';
  var vowelCount = 0;
  for (var i = 0; i < string.length; i++) {
    if (vowels.indexOf(string[i]) !== -1) {
      vowelCount += 1;
    }
  }
  return vowelCount;
}
