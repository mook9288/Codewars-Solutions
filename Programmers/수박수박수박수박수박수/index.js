function solution(n) {
  var answer = '';
  var num = parseInt((n / 2) + 1);
  if (n % 2 === 0) {
    answer = Array(num).join("수박");
  } else {
    answer = Array(num).join("수박") + "수";
  }
  return answer;
}

function solution(n) {
  var answer = '';
  for (var i = 0; i < n; i++) { 
    (i % 2 === 0) ? answer += "수" : answer += "박";
  }
  return answer;
}