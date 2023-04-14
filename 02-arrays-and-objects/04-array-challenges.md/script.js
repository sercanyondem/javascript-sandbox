// *Challenge 1*
// let x;

// const arr = [1, 2, 3, 4, 5];

// x = arr.push(6);
// x = arr.unshift(0);
// x = arr.reverse();

let y;

// *Challenge 2*
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// Solution 1
// y = arr2.splice(1, 6);

// y = arr1.concat(y);

// Solution 2
const arr3 = arr1.slice(0, 4).concat(arr2);

// Solution 3
const arr4 = [...arr1, ...arr2];
arr4.splice(4, 1);

console.log(arr4);
