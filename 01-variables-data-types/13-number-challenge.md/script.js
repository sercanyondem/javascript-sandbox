const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

const sumOutput = `${x} + ${y} =${x + y}`;
const differenceOutput = `${x} - ${y} =${x - y}`;
const productOutput = `${x} * ${y} =${x * y}`;
const quotientOutput = `${x} / ${y} =${x / y}`;
const rmOutput = `${x} % ${y} =${x % y}`;

console.log('1.Sayı: ' + x);
console.log('2.Sayı: ' + y);
console.log('Toplam: ' + sumOutput);
console.log('Fark: ' + differenceOutput);
console.log('Çarpma: ' + productOutput);
console.log('Bölme: ' + quotientOutput);
console.log('Kalan: ' + rmOutput);
