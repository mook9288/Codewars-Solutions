function solution(n) {
  var answer = '';
  if (n % 2 === 0) {
    answer = Array((n / 2) + 1).join("수박");
  } else {
    answer = Array(parseInt((n / 2) + 1)).join("수박") + "수";
  }
  return answer;
}