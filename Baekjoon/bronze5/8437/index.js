const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(BigInt);
const total = input[0];
const difference = input[1];
let a = (total + difference) / 2n;
let b = a - difference;
console.log(a.toString(), b.toString());
