var one = 1;
var two = 2;
var three = 3;

var maximumValue = Math.max(one, two, three);

console.log('maximumValue:', maximumValue);

var heroes = ['Spiderman', 'Batman', 'Goku', 'The Flash'];

var randomNumber = Math.random() * heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];

console.log('randomHero:', randomHero);

var library = [
  {
    title: 'Where the Red Fern Grows',
    author: 'Wilson Rawls'
  },
  {
    title: 'The Art Of War',
    author: 'Sun Tzu'
  },
  {
    title: 'The Mist',
    author: 'Stephen King'
  }
];

var lastBook = library.pop();

console.log('lastBook:', lastBook);

var firstBook = library.shift();

console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library:', library);

var fullName = 'Thomas Willson';

var firstAndLastName = fullName.split(' ');

console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();

console.log('sayMyName:', sayMyName);
