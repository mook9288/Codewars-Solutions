const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let sum = 0;
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
const a = parseInt(input[0]);
const b = parseInt(input[1]);
console.log(a + b);
