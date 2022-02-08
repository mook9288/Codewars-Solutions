const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const a = BigInt(input[0]);
const b = BigInt(input[1]);
console.log(a + b + '\n' + (a - b) + '\n' + a * b);
