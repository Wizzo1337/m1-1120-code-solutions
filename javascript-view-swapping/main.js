var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

var handleClick = function (event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      if ($tab[i] === event.target) {
        $tab[i].setAttribute('class', 'tab active');
      } else if ($tab[i] !== event.target) {
        $tab[i].setAttribute('class', 'tab');
      }
    }
    var dataView = event.target.getAttribute('data-view');
    for (var x = 0; x < $view.length; x++) {
      if ($view[x].getAttribute('data-view') === dataView) {
        $view[x].setAttribute('class', 'view');
      } else if ($view[x].getAttribute('data-view') !== dataView) {
        $view[x].setAttribute('class', 'view hidden');
      }
    }
  }
};

$tabContainer.addEventListener('click', handleClick);
