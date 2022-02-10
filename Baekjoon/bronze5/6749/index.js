const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);
const age = input.reduce((prev, curr) => Math.abs(prev - curr));
const answer = input[1] + age;
console.log(answer);
