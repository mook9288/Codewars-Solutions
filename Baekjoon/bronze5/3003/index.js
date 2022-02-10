const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);
const chess = [1, 1, 2, 2, 2, 8];
const answer = chess.map((v, i) => v - input[i]);
console.log(...answer);
