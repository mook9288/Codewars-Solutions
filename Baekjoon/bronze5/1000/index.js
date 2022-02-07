const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const a = parseInt(input[0]);
const b = parseInt(input[1]);
console.log(a + b);
