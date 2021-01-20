var $singleKey = document.querySelectorAll('span');
var currentKey = 0;

var handleTyping = function (event) {
  var key = event.key;
  if (key === $singleKey[currentKey].textContent) {
    $singleKey[currentKey].style.color = '#39FF14';
    $singleKey[currentKey + 1].style.borderBottom = 'solid black';
    if (currentKey >= 0) {
      $singleKey[currentKey].style.borderBottom = '';
    }
    currentKey += 1;
  } else if (key !== $singleKey[currentKey].textContent) {
    $singleKey[currentKey].style.color = '#FF0000';
    $singleKey[currentKey].style.borderBottom = 'solid red';
    if (currentKey > 0) {
      $singleKey[currentKey - 1].style.borderBottom = '';
    }
  }
};

var handleLoad = function () {
  $singleKey[currentKey].style.borderBottom = 'solid black';
};

document.addEventListener('keydown', handleTyping);
window.addEventListener('load', handleLoad);
