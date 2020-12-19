function convertMinutesToSeconds(minutes) {
  var converter = minutes * 60;
  return converter;
}

console.log('value of minutes to seconds:', convertMinutesToSeconds(5));

function greet(name) {
  var greetings = 'Hey, ' + name;
  return greetings;
}

console.log(greet('Thomas'));

function getArea(width, height) {
  var area = width * height;
  return area;
}

console.log('value for width of 17 and height of 42:', getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}

var getFirstNameResults = getFirstName({ firstName: 'asdf', lastName: 'Lamperouge' });
console.log(getFirstNameResults);

function getLastElement(array) {
  var lastIndex = array.length - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}

var getLastElementResults = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log(getLastElementResults);
