/* exported oddOrEven */
function oddOrEven(numbers) {
  var myArray = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      myArray.push('even');
    } if (numbers[i] % 2 === 1) {
      myArray.push('odd');
    }
  } return myArray;
}
