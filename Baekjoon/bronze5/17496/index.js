const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const summer = input[0];
const day = input[1];
const space = input[2];
const price = input[3];
console.log((Math.ceil(summer / day) - 1) * space * price);
