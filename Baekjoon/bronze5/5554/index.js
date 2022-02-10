const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number)
  .reduce((prev, curr) => prev + curr);
const min = parseInt(input / 60);
const sec = input % 60;
console.log(min + '\n' + sec);
