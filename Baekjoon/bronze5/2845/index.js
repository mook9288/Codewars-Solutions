const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
const a = input[0]
  .toString()
  .trim()
  .split(' ')
  .map(Number)
  .reduce((prev, curr) => prev * curr);
const b = input[1]
  .toString()
  .trim()
  .split(' ')
  .map((i) => Number(i) - a);

console.log(...b);
