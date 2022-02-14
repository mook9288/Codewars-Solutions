const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(BigInt);
const A = input[0];
const B = input[1];
const row1 = A + B;
const row2 = A - B;
const row3 = A * B;
const row4 = A / B;
const row5 = A % B;
console.log(row1 + '\n' + row2 + '\n' + row3 + '\n' + row4 + '\n' + row5);
