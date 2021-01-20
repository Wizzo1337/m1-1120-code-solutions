/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word.length > 3) {
    return word[0].toUpperCase() + word.slice(1, 4).toLowerCase() + word[4].toUpperCase() + word.slice(5).toLowerCase();
  } else if (word.length <= 3) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
}
