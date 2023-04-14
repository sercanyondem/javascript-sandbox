// *Challenge 1
// function getCelsius(value) {
//   return ((value - 32) * 5) / 9;
// }

const getCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

console.log(`The temp is ${getCelsius(50)} \xB0C`);

// *Challenge 2
// function minMax(arr) {
//   const min = Math.min(...arr);
//   const max = Math.max(...arr);
//   return {
//     min,
//     max,
//   };
// }
// console.log(minMax([1, 2, 3, 4, 5]));

const minMax = (value) =>
  `min: ${Math.min(...value)}, max: ${Math.max(...value)}`;

console.log(minMax([1, 2, 3, 4, 5]));

((length, width) => {
  const result = length * width;
  console.log(
    `The area of a rectangle with a legth of ${length} and a width ${width} is ${result}`
  );
})(10, 5);
