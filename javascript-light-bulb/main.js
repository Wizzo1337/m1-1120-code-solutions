var $lightBulb = document.querySelector('div.row > div');
var $body = document.querySelector('body');

var turnLightSwitch = function () {
  if ($lightBulb.className === 'circleLight') {
    $lightBulb.className = 'circleDark';
    $body.className = 'bckgrdDark';
  } else if ($lightBulb.className === 'circleDark') {
    $lightBulb.className = 'circleLight';
    $body.className = 'bckgrdLight';
  }
};

$lightBulb.addEventListener('click', turnLightSwitch);
