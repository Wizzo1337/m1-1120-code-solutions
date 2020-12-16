var student = {
  firstName: 'Thomas ',
  lastName: 'Willson',
  age: 32
};

var fullName = student.firstName + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Neurodiagnostic Tech';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Honda',
  model: 'CRZ',
  year: 2012
};

vehicle['color'] = 'Black';
vehicle['isConvertible'] = false;

console.log("value of vehicle['color']:", vehicle['color']);
console.log("value of vehicle['isConvertible']", vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Missy',
  type: 'Pomeranian'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
