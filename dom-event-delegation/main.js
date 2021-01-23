var $taskList = document.querySelector('.task-list');

var handleClick = function (event) {
  console.log(event.target);
  console.log(event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var closest = event.target.closest('.task-list-item');
    console.log('closest: ', closest);
    closest.remove();
  }
};

$taskList.addEventListener('click', handleClick);
