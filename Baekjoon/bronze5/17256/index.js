const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const a = input[0].split(' ').map(Number);
const c = input[1].split(' ').map(Number);
const x = c[0] - a[2];
const y = c[1] / a[1];
const z = c[2] - a[0];
console.log(x + ' ' + y + ' ' + z);
