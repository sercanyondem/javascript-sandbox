// This is a single line of code

/*
console.log(100);

console.log('hello world');

console.log(20, 'hello', true);
*/

const x = 100;

console.log(x);

console.error('Alert');

console.warn('Warning');

console.table({ name: 'Sercan', email: 'sercan@gmail.com' });

console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

const styles = 'padding: 10px; background-color: black; color: green';

console.log('%c Hello World', styles);
