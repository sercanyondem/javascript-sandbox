// *Falsy Values:
// - false
// - 0
// - "" or '' (empty string)
// - null
// - undefined
// - NaN

const x = 0;

if (x) {
  console.log('this is truthy');
} else {
  console.log('this is falsy');
}

console.log(Boolean(x));

// *Truthy Values:
// - Everthing else that is not falsy
// - true
// - '0' (0 in a string)
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)

const y = function () {};

if (y) {
  console.log('this is truthy');
} else {
  console.log('this is falsy');
}

console.log(Boolean(y));

// *Truthy or falsy caveats
// const children = 2;
// if(children !== undefined) {
//   console.log(`You have ${children} children`);
// } else{
//   console.log('Please enter number of children');
// }

const children = 0;
if (!isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter number of children');
}

// *Checking for empty arrays
// const posts = ['Post One', 'Post Two'];
// if (posts) {
//   console.log('List Posts');
// } else {
//   console.log('No posts');
// }
const posts = [];
if (posts.length > 0) {
  console.log('List Posts');
} else {
  console.log('No posts to list');
}

// *Checking for empty objects
// const user = {
//   name: 'Brad',
// };
// if (user) {
//   console.log('List user');
// } else {
//   console.log('No User');
// }
const user = {};
if (Object.keys(user).length > 0) {
  console.log('List user');
} else {
  console.log('No User');
}

// *Loose Equality(==)
console.log(false === 0);
console.log('' === 0);
console.log(null === undefined);
