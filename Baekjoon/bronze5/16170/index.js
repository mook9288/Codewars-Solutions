const date = new Date();
function zero(num) {
  return num < 10 ? '0' + num : String(num);
}
console.log(
  date.getFullYear().toString() +
    '\n' +
    zero(date.getMonth() + 1) +
    '\n' +
    zero(date.getDate())
);
