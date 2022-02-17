const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);
function calc(x, y) {
  return (x + y) * (x - y);
}
console.log(calc(input[0], input[1]));
