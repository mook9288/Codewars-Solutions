const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);
const n1 = input[0];
const n2 = input[1];
const k1 = input[2];
const k2 = input[3];
console.log(n1 * n2 + k1 * k2);
