// Ways to declare a variable - bir değişken bildirmenin yolları
// var, let, const

let firstName = 'John';
let lastName = 'Doe';

console.log(firstName, lastName);

let age = 30;
console.log(age);

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

let name = 'Sercan';

// Multi-Word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// Re-assigning variables
age = 31;

console.log(age);

let score;

score = 1;

console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);

const x = 100;

const arr = [1, 3, 5, 7];

arr.push(9);

console.log(arr);

const person = {
  name: 'John',
};

person.name = 'Sercan';

person.email = 'john@example.com';

console.log(person);

// Declare multiple values at once
let a, b, c;
a = 100;
b = 200;
c = 300;

const d = 10,
  e = 20,
  f = 30;

console.log(d);
