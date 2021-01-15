var $openModal = document.querySelector('.openModal');
var $closeModal = document.querySelector('.no');
var $modal = document.querySelector('.popUp');

var handleRemoveHidden = function () {
  $modal.classList.remove('hidden');
};

var handleAddHidden = function () {
  $modal.classList.add('hidden');
};

$openModal.addEventListener('click', handleRemoveHidden);
$closeModal.addEventListener('click', handleAddHidden);
