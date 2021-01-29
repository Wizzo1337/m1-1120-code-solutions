var books = [
  {
    isbn: '123',
    title: 'JavaScript for Noobs',
    author: 'R L Stine'
  },
  {
    isbn: '456',
    title: 'Hunger Games',
    author: 'R U Slime'
  },
  {
    isbn: '789',
    title: 'Pet Semetary',
    author: 'Stephen King'
  }
];

console.log('value for books: ', books);
console.log('typeof value for books: ', typeof books);

console.log('results for JSON.stringify: ', JSON.stringify(books));
console.log('typeof JSON.stringify(): ', typeof JSON.stringify(books));

var student = '{ "id": "654", "name": "Thomas"}';

console.log('value of student: ', student);
console.log('typeof student: ', typeof student);

console.log('results for JSON.parse()', JSON.parse(student));
console.log('typeof JSON.parse()', JSON.parse(student));
