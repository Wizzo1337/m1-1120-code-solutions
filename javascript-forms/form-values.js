var $contactForm = document.querySelector('[id="contact-form"]');

var handleSubmit = function (event) {
  var oneObject = {
    name: $contactForm.elements.name.value,
    email: $contactForm.elements.email.value,
    message: $contactForm.elements.message.value
  };
  event.preventDefault();
  console.log(oneObject);
  $contactForm.reset();
};

$contactForm.addEventListener('submit', handleSubmit);
