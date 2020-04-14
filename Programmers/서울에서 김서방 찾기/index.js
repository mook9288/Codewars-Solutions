function solution(seoul) {
  var answer = '';

  for(var answer=0; answer<seoul.length; answer++){
    if(seoul[answer] == "Kim") break;
  }

  return "김서방은 " + answer + "에 있다";
}