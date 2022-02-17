const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();
const test = BigInt(input);
const answer = test % 20000303n;

console.log(answer.toString());
