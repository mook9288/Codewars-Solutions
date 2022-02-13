const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = Number(require('fs').readFileSync(filePath).toString().trim());
let sum = 0;
for (let idx = 1; idx <= input; idx++) {
  sum += idx;
}
console.log(sum);
