const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let sum = 0;
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map((i) => (sum += Math.pow(Number(i), 2)));
console.log(sum % 10);
