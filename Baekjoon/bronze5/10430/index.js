const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);
const A = input[0];
const B = input[1];
const C = input[2];
const row1 = (A + B) % C;
const row2 = ((A % C) + (B % C)) % C;
const row3 = (A * B) % C;
const row4 = ((A % C) * (B % C)) % C;
console.log(row1 + '\n' + row2 + '\n' + row3 + '\n' + row4);
